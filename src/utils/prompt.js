

import path from "path";

import fs from "fs-extra";
import inquirer from "inquirer";


const prompt = async function(id, choices){

    const key = id.replace(/[\W_\s]+/gu, "-").toLowerCase();
    const previousPath = path.join(process.cwd(), `node_modules/.cache/tamland/prompts/${ key }.json`);
    const previousExists = await fs.exists(previousPath);

    let previous = null;

    if(previousExists){

        const raw = await fs.readFile(previousPath);

        previous = JSON.parse(raw)[key];

    }

    if(choices.length === 1){

        return choices[0].value;

    }

    const choice = await inquirer.prompt([{
        choices,
        default: previous,
        message: `Select ${ id }:`,
        name: key,
        type: "list"
    }]);

    await fs.ensureDir(path.dirname(previousPath));
    await fs.writeFile(previousPath, JSON.stringify(choice), "utf8");

    return choice[key];

};

export default prompt;
