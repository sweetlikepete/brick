

import testImport from "./test-import";


interface Config {
    name?: string;
    globs?: string | string[];
}


abstract class Task{

    public globs?: string | string[];

    public name?: string;

    public constructor(config: Config = {}){

        this.globs = config.globs;
        this.name = config.name;

        testImport();

    }

}

export {
    Task

};
