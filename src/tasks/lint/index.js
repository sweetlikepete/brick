

import css from "./css";
import js from "./js";

import { task } from "../../utils/task";


const lint = task("Lint", async (config, options = {}) => {

    const watch = options.watch || false;

    await Promise.all([
        css(config.lint.css, watch),
        js(config.lint.js, watch)
    ]);

});

export default lint;
