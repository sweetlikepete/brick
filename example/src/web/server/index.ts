

import { app } from "@sweetlikepete/scotch";


const port = 8080;

// eslint-disable-next-line no-process-env
const PORT = process.env.PORT || port;


app.listen(PORT, () => {

    console.log(`App listening on port ${ PORT }`);
    console.log("Press Ctrl+ C to quit.");

});
