

import tape from "tape";


tape("entry point parse", (test) => {

    test.doesNotThrow(() => require("../lib/configs"), "index does not throw");

    test.end();

});
