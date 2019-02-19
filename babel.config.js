

module.exports = function(api){

    api.cache(false);

    const modules = process.env["BUILD_MJS"] === "1";

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
