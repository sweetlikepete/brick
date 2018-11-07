

const gulp = require("gulp");
const Brick = require(".");


const automation = new Brick();


gulp.task("lint", gulp.series(
    automation.web.lint.js.run()
));
