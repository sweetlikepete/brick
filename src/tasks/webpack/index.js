

import sequential from "promise-sequential";

import utils from "../../utils";
import { task } from "../../utils/task";


const label = "webpack";

const webpackTask = task(label, async (config, options) => {

    const { watch = false } = options;

    const webpack = (target, mode, platform) => () => utils.exec([
        "webpack",
        "--color",
        `--env.target=${ target || "node" }`,
        `--env.mode=${ mode || "production" }`,
        `--env.platform=${ platform || "web" }`,
        `${ watch ? "--watch" : "" }`
    ].filter(Boolean).join(" "), label);

    const commands = [
        webpack("client", "production", "web"),
        webpack("server", "production", "web")
    ];

    if(watch){

        await Promise.all(commands.map((command) => command()));

    }else{

        await sequential(commands);

    }

});

export default webpackTask;
