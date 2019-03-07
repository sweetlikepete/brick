

import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";


export default function configure(config, options){

    return {
        optimization: {
            concatenateModules: true,
            flagIncludedChunks: true,
            mangleWasmImports: true,
            mergeDuplicateChunks: true,
            minimize: options.mode === "production",
            minimizer: [new OptimizeCSSAssetsPlugin({})].concat(
                options.target === "client" ? [
                    new TerserPlugin({
                        sourceMap: true,
                        terserOptions: {
                            mangle: true,
                            output: {
                                comments: false
                            }
                        }
                    })
                ] : []
            ),
            moduleIds: options.mode === "production" ? "hashed" : "named",
            nodeEnv: "production",
            occurrenceOrder: true,
            providedExports: true,
            removeAvailableModules: true,
            removeEmptyChunks: true,
            sideEffects: true,
            splitChunks: {
                automaticNameDelimiter: "~",
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    vendors: {
                        name: "vendor",
                        priority: -10,
                        test: /[/\\]node_modules[/\\]/u
                    }
                },
                chunks: "async",
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                maxSize: 0,
                minChunks: 1,
                minSize: 30000,
                name: true
            },
            usedExports: true
        }
    };

}
