const gulp = require('gulp')
const bs = require('browser-sync')
const wp = require('webpack-stream')
const babel = require('gulp-babel')

gulp.task('default', () => {
	gulp.watch('./*.html').on('change', bs.reload)
	gulp.watch('./src/*.vue').on('change', bs.reload)
	gulp.watch('./src/*.js').on('change', bs.reload)
	bs.init({
		server: './'
	})
})

gulp.task('scripts', ()=>{
	gulp.src('./src/main.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist'))
})