module.exports = function () {
	const images = () => {
		return $.gulp.src("#src/img/**/*.{jpg,png,svg}")
			.pipe($.imagemin([
				imagemin.optipng({
					optimizationLevel: 3
				}),
				imagemin.mozjpeg({
					quality: 75,
					progressive: true
				}),
				imagemin.svgo()
			]))
			.pipe($.gulp.dest("dist/img"))
	}
}