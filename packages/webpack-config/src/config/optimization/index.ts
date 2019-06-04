

import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";

import { IWebpackCompiledOptions } from "../../interfaces";


export default function configuration(
    config: Configuration,
    options: IWebpackCompiledOptions
): Configuration{

    return {
        optimization: {
            concatenateModules: true,
            flagIncludedChunks: true,
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
