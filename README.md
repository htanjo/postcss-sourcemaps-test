Sourcemaps test for gulp-sass + gulp-postcss.
See [gulpfile.js](gulpfile.js).

* [Issue report for gulp-postcss](https://github.com/postcss/gulp-postcss/issues/64)
* [Workaround](https://github.com/htanjo/postcss-sourcemaps-test/pull/1/files) - Run `gulp css:workaround`

```sh
$ gulp css
# Incorrect Sourcemaps!

$ gulp css:workaround
# Works!

$ gulp css:without-option
# Works!

$ gulp css:sass-only
# Works!
```
