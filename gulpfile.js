

const gulp = require("gulp");
const Brick = require("./lib");


const automation = new Brick.default();


gulp.task("lint", gulp.series(
    automation.web.lint.js.run()
));
