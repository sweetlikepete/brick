

import path from "path";

import fs from "fs-extra";
import { hashElement } from "folder-hash";
import logger from "@sweetlikepete/logger";
import sequential from "promise-sequential";

import { exec } from "../../../utils";


const scope = "@sweetlikepete";
const rootPackage = "brick";
const label = "tamland";


const getPackageMap = async function(targets){

    const cwd = process.cwd();
    const targetDirectories = targets.map((target) => path.join(cwd, "src", target));
    const directories = [path.join(cwd)].concat(targetDirectories);

    const map = await Promise.all(directories.map(async (directory) => {

        const exists = await fs.exists(path.join(directory, "node_modules", scope));

        let packages = [];

        if(exists){
            packages = await fs.readdir(path.join(directory, "node_modules", scope));
        }

        return {
            directory,
            packages
        };

    }));

    const packageMap = [];

    map.forEach((mapping) => {
        mapping.packages.forEach((pack) => {
            packageMap.push([mapping.directory, pack]);
        });
    });

    return packageMap;

};


const getCache = async function(){

    const directory = path.join(process.cwd(), "node_modules/.cache");
    const filename = path.join(directory, "local-tamland.json");
    const exists = await fs.exists(filename);

    if(exists){

        const raw = await fs.readFile(filename, "utf-8");

        try{

            return JSON.parse(raw);

        }catch(error){

            return {};

        }

    }

    return {};

};

const setCache = async function(cache){

    const directory = path.join(process.cwd(), "node_modules/.cache");
    const filename = path.join(directory, "local-tamland.json");

    await fs.ensureDir(directory);
    await fs.writeFile(filename, JSON.stringify(cache));

};


const installPackage = async function(pack, location, directory){

    const installDirectory = path.join(directory, pack === rootPackage ? ".." : "packages", pack);
    const cacheDirectory = path.join(process.cwd(), "node_modules/.cache");
    const locationPackageJSONRaw = await fs.readFileSync(path.join(location, "package.json"));
    const locationPackageJSON = JSON.parse(locationPackageJSONRaw);
    const packageJSONRaw = await fs.readFileSync(path.join(installDirectory, "package.json"));
    const packageJSON = JSON.parse(packageJSONRaw);
    const cacheKey = `${ pack }-${ location }`;
    const cache = await getCache();
    const installedDevelopment = Boolean((locationPackageJSON.devDependencies || {})[`${ scope }/${ pack }`]);
    const installed = Boolean((locationPackageJSON.dependencies || {})[`${ scope }/${ pack }`]);

    await fs.ensureDir(cacheDirectory);

    const sourceCodeHash = await hashElement(installDirectory, {
        files: { include: ["*.*"] },
        folders: { exclude: ["node_modules", ".git"] }
    });

    const packageJSONHash = await hashElement(installDirectory, {
        files: { include: ["package.json"] },
        folders: { exclude: ["*"] }
    });

    const hash = {
        package: packageJSONHash.children[0].hash,
        source: sourceCodeHash.hash
    };

    const cacheHash = cache[cacheKey] || {};

    if(
        cacheHash.package === hash.package &&
        cacheHash.source === hash.source
    ){

        logger.log(label, `Already installed ${ pack }`, "#aaccaa");

    }else if(
        cacheHash.package !== hash.package &&
        (installed || installedDevelopment)
    ){

        logger.log(label, "");
        logger.log(label, `Installing ${ scope }/${ pack } into ${ location }`, "#00ff00");
        logger.log(label, "");

        await exec({
            command: [
                `cd ${ installDirectory }`,
                (packageJSON.scripts || {}).prepublishOnly ? "npm run prepublishOnly" : "echo ''",
                "package=$(npm pack)",
                `mv $package ${ cacheDirectory }`,
                `cd ${ location }`,
                `npm install ${ cacheDirectory }/$package ${ installedDevelopment ? "--save-dev" : "" }`
            ].join(" && "),
            label
        });

        cache[cacheKey] = hash;

    }else if(
        cacheHash.source !== hash.source &&
        (packageJSON.scripts || {}).build
    ){

        logger.log(label, "");
        logger.log(label, `Updating ${ scope }/${ pack } code`, "#00ff00");
        logger.log(label, "");

        await exec({
            command: [
                "cwd=$(pwd)",
                `cd ${ installDirectory }`,
                "npm run build",
                `cp -rf ${ installDirectory }/lib "${ path.join(location, "node_modules/@sweetlikepete", pack) }"`
            ].join(" && "),
            label
        });

        cache[cacheKey] = hash;

    }

    await setCache(cache);

};


const tamland = async function(config){

    const packageMap = await getPackageMap(config.targets);
    const tamlandDirectory = path.normalize(path.join(process.cwd(), config.tamland.path));

    await sequential(packageMap.map((pack) => () => installPackage(pack[1], pack[0], tamlandDirectory)));

};


export default tamland;
