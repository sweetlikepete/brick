

module.exports = function(api){

    const modules = process.env["OUTPUT_MODULES"] === "1";

    return {
        presets: [
            [
                "@sweetlikepete/babel-preset",
                {
                    addModuleExports: !modules,
                    modules: modules,
                    targets: {
                        node: modules ? true : 4
                    }
                }
            ]
        ]
    };

};
