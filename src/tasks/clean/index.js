

import path from "path";

import utils from "../../utils";
import { task } from "../../utils/task";


const label = "Clean";

const clean = task(label, async (config) => {

    await utils.exec(`rm -rf ${ path.join(process.cwd(), config.output) }`, label);
    await utils.exec(`rm -rf ${ path.join(process.cwd(), "node_modules/.cache") }`, label);

});

export default clean;
