

import build from "../../build";
import { spawn } from "../../../utils/subprocess";
import prompts from "../../../prompts";


const deployWeb = async function(config, options){

    const projectId = await prompts.environments.web();
    const version = options.version ? `--version=${ options.version }` : "";
    const project = `--project ${ projectId }`;
    const verbosity = `--verbosity=${ options.verbosity || "error" }`;

    await build(config, options);

    await spawn({
        command: `
            gcloud app deploy
            app.yaml
            ${ version }
            ${ project }
            ${ verbosity }
            --quiet
        `,
        label: "deploy"
    });

};


export default deployWeb;
