

import { exec } from "../../../utils";
import prompts from "../../../prompts";


const deployWeb = async function(config, options){

    const projectId = await prompts.environments.web();
    const version = options.version ? `--version=${ options.version }` : "";
    const project = `--project ${ projectId }`;
    const verbosity = `--verbosity=${ options.verbosity || "error" }`;

    await exec({
        command: `
            gcloud app deploy
            src/web/app.yaml
            ${ version }
            ${ project }
            ${ verbosity }
            --quiet
        `,
        label: "deploy"
    });

};


export default deployWeb;
