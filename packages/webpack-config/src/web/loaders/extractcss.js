

import MiniCssExtractPlugin from "mini-css-extract-plugin";


const extractcssLoader = (env, options) => ({
    loader: MiniCssExtractPlugin.loader,
    options: {
        publicPath: `/${ options.staticFolder }/`
    }
});


export default extractcssLoader;
