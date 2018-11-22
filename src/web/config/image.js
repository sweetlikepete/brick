

import automationConfig from "./automation";


export default function generateConfig(){

    const config = automationConfig();

    return {
        disable: !config.production,
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
    };

}
