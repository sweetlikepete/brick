

const cssLoader = () => ({
    loader: "css-loader",
    options: {
        localIdentName: "[hash:base64:8]",
        modules: true,
        sourceMap: true
    }
});


export default cssLoader;
