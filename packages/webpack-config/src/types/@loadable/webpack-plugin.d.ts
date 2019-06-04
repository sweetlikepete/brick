


declare module "@loadable/webpack-plugin" {

    import { Plugin } from 'webpack';

    interface PluginOptions{
        // Stats filename (default to loadable-stats.json)
        filename: string;
        writeToDisk: boolean | {
            filename: string;
        }
    }

    export default class webpackPlugin extends Plugin{

        constructor(options: PluginOptions);

    }

}
