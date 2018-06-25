const gulp = require('gulp')
const bs = require('browser-sync')

gulp.task('default', () => {
	gulp.watch('./*.html').on('change', bs.reload)
	gulp.watch('./js/*.js').on('change', bs.reload)
	bs.init({
		server: './'
	})
})
