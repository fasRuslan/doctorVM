module.exports = function () {
	const scripts = () => {
		return gulp.src("#src/js/main.js")
			.pipe(fileinclude({
				prefix: '@'
			}))
			.pipe(plumber())
			.pipe(sourcemap.init())
			// TODO.pipe(jsmin())
			// TODO.pipe(rename({ suffix: '.min' }))
			.pipe(sourcemap.write('.'))
			.pipe(gulp.dest('dist/js'))
			.pipe(sync.stream())
	}
}