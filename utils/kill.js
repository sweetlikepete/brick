

const exec = require("./exec");


module.exports = async function kill(str){

    await exec([
        "ps -ax",
        "|",
        `grep '[${ String(str)[0] }]${ String(str).substring(1, String(str).length) }'`,
        "|",
        "awk '{print $1}'",
        "|",
        "xargs kill -9"
    ]);

}
