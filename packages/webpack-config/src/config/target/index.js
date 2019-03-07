

export default function configure(config, options){

    return {
        target: options.target === "client" ? "web" : "node"
    };

}
