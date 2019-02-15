

import config from ".";


export default {
    ...config,
    extends: ["../rules/plugins/typescript"].map(require.resolve).concat(config.extends)
};

