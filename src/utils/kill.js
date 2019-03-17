

import exec from "./exec";


const kill = async function(str){

    await exec({
        command: [
            "ps -ax",
            "|",
            `grep '[${ String(str)[0] }]${ String(str).substring(1, String(str).length) }'`,
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
