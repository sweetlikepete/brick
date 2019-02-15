

interface IConfig {
    name?: string;
    globs?: string | string[];
}


abstract class Task{

    public globs?: string | string[];

    public name?: string;

    public constructor(config: IConfig = {}){

        this.globs = config.globs;
        this.name = config.name;

    }

}

export {
    Task
};
