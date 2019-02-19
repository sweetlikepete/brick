

module.exports = function(api){

    api.cache(false);

    const mjs = process.env["BUILD_MJS"] === "1";
    const shebang = process.env["BUILD_SHEBANG"] === "1";

    return {
        presets: [
            [
                "@sweetlikepete/babel-preset",
                {
                    addModuleExports: !mjs,
                    modules: !mjs,
                    shebang,
                    targets: {
                        node: mjs ? true : 4
                    }
                }
            ]
        ]
    };

};
