const gulp = require("gulp");
const serve = require("gulp-server-livereload");

gulp.task("build", function (cb) {
  console.log("Construyendo proceso");
  setTimeout(cb, 1200);
});

gulp.task("serve", function (cb) {
  gulp.src("src").pipe(
    serve({
      livereload: true,
      open: true,
    })
  );
});

gulp.task("default", gulp.series("build", "serve"));
