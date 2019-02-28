

import path from "path";

import utils from "../../utils";
import { task } from "../../utils/task";


const label = "Webpack";

const webpackTask = task(label, async () => {

    await utils.exec("webpack", label);

});

export default webpackTask;
