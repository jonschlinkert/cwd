/**
 * cwd <https://github.com/jonschlinkert/cwd>
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var path = require('path');
var findup = require('findup-sync');

module.exports = path.resolve(path.dirname(findup('package.json', {cwd: process.cwd()})));