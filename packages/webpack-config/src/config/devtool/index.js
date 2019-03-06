
/*
 * Chooses a style of source mapping to enhance the debugging process. These
 * values can affect build and rebuild speed dramatically.
 *
 * https://webpack.js.org/configuration/devtool/
 */
export default function configure(config, options){

    const modes = {

        /*
         * Similar to cheap-eval-source-map, however, in this case Source Maps
         * from Loaders are processed for better results. However Loader Source
         * Maps are simplified to a single mapping per line.
         *
         * https://webpack.js.org/configuration/devtool/#development
         */
        development: "cheap-module-source-map",

        /*
         * A full SourceMap is emitted as a separate file. It adds a reference
         * comment to the bundle so development tools know where to find it.
         *
         * https://webpack.js.org/configuration/devtool/#production
         */
        production: "source-map"
    };

    return {
        devtool: modes[options.mode] || modes.development
    };

}
