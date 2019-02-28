

const imageLoader = (env, options) => ({
    loader: "image-webpack-loader",
    options: {
        disable: !options.production,
        gifsicle: {
            interlaced: false
        },
        mozjpeg: {
            progressive: true,
            quality: 65
        },
        optipng: {
            enabled: false
        },
        pngquant: {
            quality: "65-90",
            speed: 4
        }
    }
});


export default imageLoader;
