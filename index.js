/*!
 * cwd <https://github.com/jonschlinkert/cwd>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var path = require('path');
var lazy = require('lazy-cache')(require);
lazy('look-up');

/**
 * Expose `cwd`
 */

module.exports = cwd;

/**
 * Cache filepaths to prevent hitting the file system
 * for multiple lookups for the exact same path.
 */

var cache = {};

/**
 * Uses [look-up] to resolve the absolute path to the root of a project.
 *
 * @param {String|Array} `filepath` The starting filepath. Can be a string, or path parts as a list of arguments or array.
 * @return {String} Resolve filepath.
 * @api public
 */

function cwd() {
  var fp = path.resolve.apply(path, [].concat.apply([], arguments));
  if (cache.hasOwnProperty(fp)) {
    return cache[fp];
  }
  try {
    var res = lazy.lookup('package.json', {cwd: fp});
    var base = res ? path.dirname(res) : '';
    return (cache[fp] = path.resolve(base, fp));
  } catch (err) {
    return (cache[fp] = fp);
  }
}
