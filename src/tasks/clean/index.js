

import path from "path";

import fs from "fs-extra";
import logger from "@sweetlikepete/logger";

import { task } from "../../utils/task";


const label = "clean";


const remove = async (removePath) => {

    const exists = await fs.exists(removePath);

    logger.log(removePath, {
        color: exists ? "#ffffff" : "#777777",
        label
    });

    if(exists){

        await fs.remove(removePath);

    }

};


const clean = task(label, (config, options) => {

    const {
        platform = "web"
    } = options;

    const paths = [
        path.join(config.cwd, `src/${ platform }/dist`)
    ];

    paths.sort();

    return Promise.all(paths.map((pth) => remove(pth)));

});


export default clean;
