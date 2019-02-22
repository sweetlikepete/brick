

import exec from "./exec";


const kill = async function(str){

    await exec([
        "ps -ax",
        "|",
        `grep '[${ String(str)[0] }]${ String(str).substring(1, String(str).length) }'`,
        "|",
        "awk '{print $1}'",
        "|",
        "xargs kill -9"
    ]);

};

export default kill;
