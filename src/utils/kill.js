

import { exec } from "./subprocess";


const kill = async function(string){

    await exec({
        command: [
            "ps -ax",
            "|",
            `grep '[${ String(string)[0] }]${ String(string).substring(1, String(string).length) }'`,
            "|",
            "awk '{print $1}'",
            "|",
            "xargs kill -9"
        ].join(""),
        detatch: true,
        label: "kill"
    });

};

export default kill;
