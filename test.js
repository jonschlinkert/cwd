/*!
 * cwd <https://github.com/jonschlinkert/cwd>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var path   = require('path');
var normalize   = require('normalize-path');
var cwd = require('./');

describe('cwd:', function() {
  it('should return the absolute cwd', function() {
    normalize(cwd()).should.equal(normalize(process.cwd()));
  });

  it('should return the absolute path relative to the cwd', function() {
    normalize(cwd('first', 'second', 'third')).should.equal(normalize(path.join(process.cwd(), 'first', 'second', 'third')));
  });
});