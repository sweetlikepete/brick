

import path from "path";

import chalk from "chalk";
import fs from "fs-extra";
import filesize from "filesize";
import gifsicle from "imagemin-gifsicle";
import globby from "globby";
import imagemin from "imagemin";
import jpegtran from "imagemin-jpegtran";
import optipng from "imagemin-optipng";
import svgo from "imagemin-svgo";

import { logger } from "../../utils";


const optimize = async function(globalConfig){

    const paths = await globby(globalConfig.optimize.image.paths);
    const stats = await Promise.all(paths.map((pth) => fs.stat(pth)));
    const sizes = stats.map((stat) => stat.size);
    const config = globalConfig.optimize.image.settings;

    // We're try catching into the rejection, so we'll catch any errors
    // eslint-disable-next-line no-async-promise-executor
    const savings = await Promise.all(paths.map((pth, index) => new Promise(async (resolve, reject) => {

        try{

            const [file] = await imagemin([pth], path.dirname(pth), {
                plugins: [
                    gifsicle(config.gifsicle),
                    jpegtran(config.jpegtran),
                    optipng(config.optipng),
                    svgo(config.svgo)
                ]
            });

            const percentageBase = 100;
            const diff = sizes[index] - file.data.byteLength;
            const arrow = `${ filesize(sizes[index]) } > ${ filesize(file.data.byteLength) }`;
            const percentage = chalk.hex(diff < 0 ? "#ff0000" : "#00ff00")(`${ (diff / sizes[index] * percentageBase).toFixed(1) }%`);

            logger.log("optimize image", `${ percentage } ${ arrow } ${ chalk.hex("#666")(pth) }`);

            resolve(diff);

        }catch(error){

            reject(error);

        }

    })));

    const saved = filesize(savings.reduce((acc, cur) => cur + acc));

    logger.log("optimize image", `Saved a total of ${ chalk.hex("#00ff00")(saved) }`);

};


export default optimize;
