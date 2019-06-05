

import { Configuration } from "webpack";

import { Options } from "../..";


export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    return {
        target: options.target === "client" ? "web" : "node"
    };

}
