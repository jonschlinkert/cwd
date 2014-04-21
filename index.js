/**
 * cwd <https://github.com/jonschlinkert/cwd>
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var path = require('path');
var findup = require('findup-sync');

var cwd = module.exports = function() {
  var filepath = path.join.apply(path, arguments);
  var base = path.dirname(findup('package.json', {cwd: process.cwd()}));
  return path.resolve(base, filepath || '').replace(/\\/g, '/');
};