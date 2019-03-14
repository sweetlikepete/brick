

import exec from "../../utils/exec";
import { task } from "../../utils/task";


const label = "setup";


const setupTask = task(label, async () => {

    await exec("ls -al", label);

});


export default setupTask;
