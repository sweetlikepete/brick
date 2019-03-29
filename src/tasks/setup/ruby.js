

import {
    exec,
    logger
} from "../../utils";


const ruby = async function(){

    try{

        // Check if ruby is installed
        await exec({
            command: "ruby --version",
            detatch: true
        });

        logger.log("setup", "✔ ruby", "#00ff00");

    }catch(error){

        logger.error("check installed ruby", [
            "",
            "Ruby is not installed on this machine.",
            "",
            "Please install it manually before you proceed.",
            ""
        ].join("\n"));

        process.exit();

    }

};


export default ruby;
