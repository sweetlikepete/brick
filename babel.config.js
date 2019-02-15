

module.exports = function(api){

    api.cache(false);

    const modules = process.env["OUTPUT_MODULES"] === "1";

    return {
        plugins: [
            modules ? false : "add-module-exports"
        ].filter(Boolean),
        presets: [
            "@babel/preset-typescript",
            [
                "@babel/preset-env",
                {
                    modules: modules ? false : "commonjs",
                    targets: {
                        "node": modules ? true : 4
                    }
                }
            ]
        ]
    };

};
