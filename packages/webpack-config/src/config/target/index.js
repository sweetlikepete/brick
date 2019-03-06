

export default function configure(config, options){

    return {
        target: options.target === "web" ? "web" : "node"
    };

}
