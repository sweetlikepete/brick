

import path from "path";

import fs from "fs-extra";
import logger from "@sweetlikepete/logger";

import { task } from "../../utils/task";


const label = "clean";


const remove = async (removePath) => {

    const exists = await fs.exists(removePath);

    logger.log(label, removePath, exists ? "#ffffff" : "#777777");

    if(exists){

        await fs.remove(removePath);

    }

};


const clean = task(label, () => {

    const cwd = process.cwd();

    const paths = [
        path.join(cwd, "node_modules/.cache"),
        path.join(cwd, "dist")
    ];

    paths.sort();

    return Promise.all(paths.map((pth) => remove(pth)));

});


export default clean;
