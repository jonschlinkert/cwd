/**
 * cwd <https://github.com/jonschlinkert/cwd>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var path = require('path');
var lookup = require('look-up');

/**
 * Expose `cwd`
 */

module.exports = cwd;

/**
 * Uses [look-up] to resolve the absolute path to the root of a project.
 *
 * @param {String|Array} `filepath` The starting filepath. Can be a string, or path parts as a list of arguments or array.
 * @return {String} Resolve filepath.
 * @api public
 */

function cwd(filepath) {
  var fp = path.resolve.apply(path, [].concat.apply([], arguments));
  try {
    var res = lookup('package.json', {cwd: fp});
    var base = res ? path.dirname(res) : '';
    return path.resolve(base, fp);
  } catch (err) {
    return fp;
  }
}