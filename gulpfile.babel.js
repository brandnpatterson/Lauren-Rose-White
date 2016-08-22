import        babel from 'gulp-babel'
import  browserSync from 'browser-sync'
import       concat from 'gulp-concat'
import          del from 'del'
import         gulp from 'gulp'
import         load from 'gulp-load-plugins'
import         sass from 'gulp-sass'

const $ = load()
const reload = browserSync.reload

gulp.task('styles', () => {
  gulp.src('app/styles/**/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest('app/styles'))
  .pipe(gulp.dest('dist/styles'))
})

gulp.task('scripts', () => {
  gulp.src('./app/scripts/*.js')
  .pipe(concat('main.js'))
  .pipe(gulp.dest('./app/scripts'))

  return gulp.src('app/scripts/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('app/scripts'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(reload({stream: true}))
})

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()))
}

gulp.task('lint', () => {
  return lint('app/scripts/*.js', {
    fix: true
  })
    .pipe(gulp.dest('app/scripts'))
})

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'))
})

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
})

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
})

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app']
    }
  })

  gulp.watch([
    'app/*.html',
    'app/styles/**/*.scss'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles'])
  gulp.watch('app/scripts/**/*.js', ['scripts'])
  gulp.watch('app/fonts/**/*', ['fonts'])
})

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  })
})

gulp.task('clean', del.bind(null, ['.tmp', 'dist', 'app/scripts/main.js', 'app/scripts/main.min.js', 'app/styles/*.css'], {read: false}))

gulp.task('build', ['lint', 'html', 'fonts', 'images', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}))
})

gulp.task('default', ['clean'], () => {
  gulp.start('build')
})
