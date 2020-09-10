// const #src = '';
// const dist = '';

const gulp = require('gulp'),
  sync = require('browser-sync').create(),
  del = require('del'),
  csso = require('gulp-csso'),
  fileinclude = require('gulp-file-include'),
  htmlmin = require('gulp-htmlmin'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  svgstore = require('gulp-svgstore'),
  webpImages = require('gulp-webp'),
  gulpWebpHtml = require('gulp-webp-html'),
  imagemin = require('gulp-imagemin'),
  jsmin = require('gulp-jsmin'),
  rename = require('gulp-rename'),
  sourcemap = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  gulpStylelint = require('gulp-stylelint');


const styles = () => {
  return gulp.src("#src/scss/style.scss") //!берем из проекта все файлы с расширением scss здесь scss вместо sass
    .pipe(plumber()) //Проверка на наличие ошибок
    .pipe(sourcemap.init()) //Карты кода

    .pipe(sass()) //перерабатываем в css
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true
      })
    )
    //TODO .pipe(csso())
    //TODO.pipe(rename({ suffix: '.min' }))//переименовываем в style.min.css
    .pipe(sourcemap.write('.')) //Карта кода кладется в корень прям туда где я нахожусь
    .pipe(gulp.dest("dist/css")) //кладем файл в 'адрес папки'
    .pipe(sync.stream());
}

//lint css
function lintCss() {
  return gulp.src("#src/scss/style.scss")
    .pipe(gulpStylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
};

const html = () => {
  return gulp.src("#src/**/*.html")
    .pipe(fileinclude({
      prefix: '@'
    }))
    .pipe(gulpWebpHtml())
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
}

//JS
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

//Image
const images = () => {
  return gulp.src("#src/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("dist/img"))
}
const copy = () => {
  return gulp.src([
      "#src/fonts/**/*.{woff,woff2}",
      "#src/img/**/*.{jpeg,jpg,png,svg,webp}", //!здесь добавить jpeg
      "#src/*ico",
    ], {
      base: "#src" //!вот здесь не dist a #src
    })
    .pipe(gulp.dest("dist"));
}
//webp
const webp = () => {
  return gulp.src('#src/img/**/*.{jpeg,png,jpg}') //!вот здесь добавляем jpeg
    .pipe(webpImages({
      quality: 90
    }))
    .pipe(gulp.dest("#src/img"))
}

//Sprite
const sprite = () => {
  return gulp.src('#src/img/**/*.svg')
    .pipe(svgstore())
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('dist/img'))
}

// img function

const imgtask = gulp.series(
  sprite,
  images,
  webp
)


//clean
const clean = () => {
  return del("dist");
}


//Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'dist'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
//Build
const build = gulp.series(
  clean,
  copy,
  html,
  styles,
  scripts
);


//Watcher
const watcher = () => {
  gulp.watch("#src/scss/**/*.scss", gulp.series("styles")); //!здесь scss вместо sass
  gulp.watch("#src/js/**/*.js", gulp.series("scripts"));
  gulp.watch("#src/**/*.html", gulp.series("html")).on("change", sync.reload);
}

exports.default = gulp.series(
  build, server, watcher
);

exports.styles = styles;
exports.html = html;
exports.server = server;
exports.watcher = watcher;
exports.images = images;
exports.webp = webp;
exports.sprite = sprite;
exports.clean = clean;
exports.scripts = scripts;
exports.imgtask = imgtask;
exports.copy = copy;
exports.lintCss = lintCss;
