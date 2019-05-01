

import logger from "@sweetlikepete/logger";

import {
    exec,
    spawn
} from "../../utils";


const brew = async function(formula){

    if(formula){

        const list = await exec({
            command: "brew list",
            detatch: true
        });

        const exists = list
        .replace(/\n/gu, " ")
        .split(" ")
        .filter(Boolean)
        .includes(formula);

        const rawJSON = await exec({
            command: `brew info ${ formula } --json`,
            detatch: true
        });

        const [latest] = JSON.parse(rawJSON);
        const updated = latest.linked_keg === latest.versions.stable;

        if(exists && updated){

            logger.log("setup", `✔ brew ${ formula }`, "#00ff00");

        }else if(exists){

            await spawn({
                command: `brew upgrade ${ formula }`,
                label: "setup"
            });

        }else{

            await spawn({
                command: `brew install ${ formula }`,
                label: "setup"
            });

        }

    }else{

        try{

            // Check if Homebrew is installed
            await spawn({
                command: "brew --version",
                detatch: true
            });

            logger.log("setup", "✔ brew", "#00ff00");

        }catch(error){

            await spawn({
                command: "/usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"",
                label: "setup"
            });

        }

    }

};

export default brew;
