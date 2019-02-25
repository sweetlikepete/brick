

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

    }

    writing(){

        const pkgJson = {
            dependencies: {
                express: "^4.16.4"
            },
            devDependencies: {
                "@newsteam/brick": "^1.0.2"
            },
            license: "UNLICENSED",
            name: this.options.appName,
            scripts: {
                lint: "brick lint"
            },
            version: "1.0.0"
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);

        const params = {
            appName: this.options.appName
        };

        this.fs.copyTpl(
            this.templatePath("."),
            this.destinationPath("."),
            params
        );

        this.fs.copyTpl(
            this.templatePath("./.*"),
            this.destinationPath("."),
            params
        );

    }

}


export default AppGenerator;
