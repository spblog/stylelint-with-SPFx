'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

const stylelint = require('gulp-stylelint');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

/* stylelint sub task */
let styleLintSubTask = build.subTask('style-lint', (gulp) => {
  return gulp
    .src('src/**/*.scss')
    .pipe(stylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
});
/* end sub task */

build.rig.addPreBuildTask(styleLintSubTask);

build.initialize(gulp);
