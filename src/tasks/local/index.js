

import utils from "../../utils";
import { task } from "../../utils/task";


const label = "Local";

const localTask = task(label, async () => {

    await utils.exec("echo wtf", label);

});

export default localTask;
