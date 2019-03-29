

import base from "./base";


export default {
    ...base,
    extends: ["../rules/plugins/typescript"].map(require.resolve).concat(base.extends)
};

