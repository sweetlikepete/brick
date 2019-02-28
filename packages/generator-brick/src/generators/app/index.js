

import Generator from "yeoman-generator";


class AppGenerator extends Generator{

    constructor(args, opts){

        super(args, opts);

        this.argument("project", {
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
            project: this.options.project
        };

        [
            [
                "./src",
                "./src"
            ],
            [
                "./setup",
                "./setup"
            ],
            [
                "./vscode",
                "./.vscode"
            ],
            [
                "./*.*",
                "."
            ],
            [
                "./.*",
                "."
            ]
        ].forEach((cp) => {

            const [
                from,
                to
            ] = cp;

            this.fs.copyTpl(
                this.templatePath(from),
                this.destinationPath(to),
                params
            );

        });

        const packageJSON = {
            name: this.options.project
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath("package.json"), packageJSON);

    }

}


export default AppGenerator;
