

import tape from "tape";


tape("entry point parse", (test) => {

    test.doesNotThrow(() => require("../lib"), "index does not throw");

    test.doesNotThrow(() => require("../lib")(), "configure does not throw");

    const indent = 4;

    console.log(JSON.stringify(require("../lib")(), null, indent));

    test.end();

});
