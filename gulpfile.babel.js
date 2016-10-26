import       gulp from "gulp"
import     concat from "gulp-concat"
import        del from "del"
import     eslint from "gulp-eslint"
import       load from "gulp-load-plugins"
import     prefix from "gulp-autoprefixer"
import        pug from "gulp-pug"
import     rename from "gulp-rename"
import       sass from "gulp-sass"
import sourcemaps from "gulp-sourcemaps"
import       sync from "browser-sync"

const $ = load()
const reload = sync.reload

gulp.task('build', ['html', 'pug-pretty', 'lint', 'fonts', 'images'])

gulp.task('clean', del.bind(null, ['index.html', 'app/js/**.min.js', 'app/index.html', 'dist/css/style.min.css', 'dist/fonts', 'dist/images', 'dist/index.html', 'dist/js/main.min.js'], {read: false}))

gulp.task('default', ['clean', 'html', 'pug-pretty', 'lint', 'fonts', 'images', 'watch'], () => {
  gulp.start('serve')
})

gulp.task('fonts', () => {
  gulp.src(['app/fonts/**.eot', 'app/fonts/**.svg','app/fonts/**.ttf', 'app/fonts/**.woff'])
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('html', ['scripts', 'styles'], () => {
  return gulp.src('app/pug/*.pug')
    .pipe(sourcemaps.init())
    .pipe(pug())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
})

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('lint', () => {
  return gulp.src(['*/**/*.js', '!node_modules/**', '!test/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('pug-pretty', () => {
  return gulp.src('app/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app'))
})

gulp.task('scripts', () => {
  return gulp.src('app/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('serve', () => {
  sync({
    notify: false,
    server: {
      baseDir: './'
    },
    port: 8888
  })
})

gulp.task('styles', () => {
  gulp.src('app/css/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(rename({suffix: '.min'}))
  .pipe(prefix('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', () => {
    gulp.watch('app/pug/*.pug', ['html', reload])
    gulp.watch('app/pug/*.pug', ['pug-pretty', reload])
    gulp.watch('app/css/**/*.*', ['styles', reload])
    gulp.watch('app/js/*.js', ['scripts', reload])
})
