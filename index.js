/**
 * cwd
 * https://github.com/jonschlinkert/cwd
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var path = require('path');
var stacktrace = require('stack-trace');
var findup = require('findup-sync');

// Inspired by the loadConfig function in matchdep:
// https://github.com/tkellen/node-matchdep
//
// "The calling module's path. Unfortunately, because modules are cached,
// module.parent is the FIRST calling module parent, not necessarily the
// current one". - @cowboy
var callerPath = path.dirname(stacktrace.get(callerPath)[1].getFileName());
module.exports = path.dirname(findup('package.json', {cwd: callerPath}));