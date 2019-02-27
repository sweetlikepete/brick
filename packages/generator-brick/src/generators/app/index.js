

import Generator from "yeoman-generator";


class AppGenerator extends Generator{

    constructor(args, opts){

        super(args, opts);

        this.argument("appName", {
            required: true,
            type: String
        });

    }

    install(){

        this.yarnInstall();

        this.spawnCommand("yarn", ["install"], {
            cwd: "src/web"
        });

    }

    writing(){

        const params = {
            appName: this.options.appName
        };

        this.fs.copyTpl(
            this.templatePath("./src"),
            this.destinationPath("./src"),
            params
        );

        this.fs.copyTpl(
            this.templatePath("./*.*"),
            this.destinationPath("."),
            params
        );

        this.fs.copyTpl(
            this.templatePath("./.*"),
            this.destinationPath("."),
            params
        );

        const packageJSON = {
            name: this.options.appName
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath("package.json"), packageJSON);

    }

}


export default AppGenerator;
