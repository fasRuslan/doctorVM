module.exports = function () {
	const html = () => {
		return $.gulp.src("#src/**/*.html")
			.pipe($.fileinclude({
				prefix: '@'
			}))
			.pipe($.gulpWebpHtml())
			// .pipe(rename({ suffix: '.min' }))
			// .pipe(htmlmin({ collapseWhitespace: true }))
			.pipe($.gulp.dest('dist'));
	}
}