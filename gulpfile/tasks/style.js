module.exports = function () {
	const styles = () => {
		return $.gulp.src("#src/scss/style.scss") //!берем из проекта все файлы с расширением scss здесь scss вместо sass
			.pipe($.plumber()) //Проверка на наличие ошибок
			.pipe($.sourcemap.init()) //Карты кода

			.pipe($.sass()) //перерабатываем в css
			.pipe(
				$.autoprefixer({
					overrideBrowserslist: ["last 5 versions"],
					cascade: true
				})
			)
			//TODO .pipe($.csso())
			//TODO.pipe($.rename({ suffix: '.min' }))//переименовываем в style.min.css
			.pipe($.sourcemap.write('.')) //Карта кода кладется в корень прям туда где я нахожусь
			.pipe($.gulp.dest("dist/css")) //кладем файл в 'адрес папки'
			.pipe($.sync.stream());
	}
}