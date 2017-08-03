const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", () => {
    return gulp.src("src/**/*.scss")
            .pipe(sass.sync().on("error", sass.logError))
            .pipe(gulp.dest("build/res/style/"));
});

gulp.task("build:watch", () => {
    gulp.watch("src/**/*.scss", ["sass"]);
});
