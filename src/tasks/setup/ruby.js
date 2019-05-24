

import logger from "@sweetlikepete/logger";

import { spawn } from "../../utils";


const label = "setup";


const ruby = async function(){

    try{

        // Check if ruby is installed
        await spawn({
            command: "ruby --version",
            detatch: true
        });

        logger.log("✔ ruby", {
            color: "#00ff00",
            label
        });

    }catch(error){

        logger.error([
            "",
            "Ruby is not installed on this machine.",
            "",
            "Please install it manually before you proceed.",
            ""
        ].join("\n"), { label });

        process.exit();

    }

};


export default ruby;
