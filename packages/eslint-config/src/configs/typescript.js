

import base from "./base";


export default {
    ...base,
    extends: ["../rules/plugins/typescript"].map(require.resolve).concat(base.extends),
    rules: {

        /*
         * Use the typescript unused vars check only because it works with
         * imported interfaces
         */
        "no-unused-vars": "off"
    }
};

