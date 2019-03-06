

import utils from "../../utils";
import { task } from "../../utils/task";


const label = "Webpack";

const webpackTask = task(label, async () => {

    await utils.exec("webpack --env.target=web --env.mode=production", label);
    await utils.exec("webpack --env.target=node --env.mode=production", label);

});

export default webpackTask;
