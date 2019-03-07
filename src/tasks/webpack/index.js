

import utils from "../../utils";
import { task } from "../../utils/task";


const label = "Webpack";

const webpackTask = task(label, async () => {

    await utils.exec("webpack --env.target=client --env.mode=production --env.platform=web", label);
    await utils.exec("webpack --env.target=server --env.mode=production --env.platform=web", label);

});

export default webpackTask;
