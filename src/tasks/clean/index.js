

import path from "path";

import fs from "fs-extra";

import { task } from "../../utils/task";
import logger from "../../utils/logger";


const label = "clean";


const remove = async (removePath) => {

    const exists = await fs.exists(removePath);

    logger.log(label, removePath, exists ? "#ffffff" : "#777777");

    if(exists){

        await fs.remove(removePath);

    }

};


const clean = task(label, (config, options) => {

    const cwd = process.cwd();
    const targets = options.platform ? [options.platform] : config.targets;

    const paths = targets
    .map((target) => path.join(cwd, "src", target, "dist"))
    .concat(targets.map((target) => path.join(cwd, "src", target, "node_modules/.cache")))
    .concat([path.join(cwd, "node_modules/.cache")]);

    paths.sort();

    return Promise.all(paths.map((pth) => remove(pth)));

});


export default clean;
