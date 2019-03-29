

/*
 * The externals configuration option provides a way of excluding dependencies
 * from the output bundles. Instead, the created bundle relies on that dependency
 * to be present in the consumer's environment.
 *
 * https://webpack.js.org/configuration/externals/#externals
 */
export default function configure(config, options){


    return {
        entry: {
            index: `src/${ options.platform }/${ options.target }/index.ts`
        }
    };

}
