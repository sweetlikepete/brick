

import { Configuration } from "webpack";

import { IWebpackCompiledOptions } from "../../interfaces";


export default function configuration(
    config: Configuration,
    options: IWebpackCompiledOptions
): Configuration{

    return {
        target: options.target === "client" ? "web" : "node"
    };

}
