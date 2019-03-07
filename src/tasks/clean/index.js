

import path from "path";

import chalk from "chalk";
import fs from "fs-extra";
import log from "fancy-log";

import { task } from "../../utils/task";


const label = "Clean";


const cleanTask = task(label, (config) => {

    const cwd = process.cwd();

    const paths = config.targets
    .map((target) => path.join(cwd, "src", target, "build"))
    .concat([path.join(cwd, "node_modules/.cache")]);

    return Promise.all(paths.map((pth) => async () => {

        const exists = await fs.exists(pth);

        log(`${ label }: ${ chalk.magenta(pth) }`);

        if(exists){

            await fs.remove(pth);

        }

    }));

});


export default cleanTask;
