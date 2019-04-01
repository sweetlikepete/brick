

import path from "path";

import fs from "fs-extra";

import { task } from "../../utils/task";
import logger from "../../utils/logger";


const label = "💀 clean";


const remove = async (removePath) => {

    const exists = await fs.exists(removePath);

    logger.log(label, removePath, exists ? "#ffffff" : "#777777");

    if(exists){

        await fs.remove(removePath);

    }

};


const clean = task(label, (config) => {

    const cwd = process.cwd();

    const paths = config.targets
    .map((target) => path.join(cwd, "src", target, "dist"))
    .concat([path.join(cwd, "node_modules/.cache")]);

    return Promise.all(paths.map((pth) => remove(pth)));

});


export default clean;
