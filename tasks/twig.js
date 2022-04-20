import gulp from 'gulp';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import config from './config';

export const twigTemplates = (cb) => {
  gulp.src('app/pages/*.twig')
    .pipe(plumber())
    .pipe(twig({
      base: 'app',
    }))
    .pipe(gulp.dest(`${config.dist}/`));

  cb();
};
