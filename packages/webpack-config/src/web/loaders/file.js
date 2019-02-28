

const fileLoader = (env, options) => ({
    loader: "file-loader",
    options: {
        name: options.production ? "[hash:20].[ext]" : "[path][name].[ext]",
        outputPath: "../client",
        publicPath: `/${ options.staticFolder }/`
    }
});


export default fileLoader;
