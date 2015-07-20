/*!
 * cwd <https://github.com/jonschlinkert/cwd>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var path = require('path');
var normalize = require('normalize-path');
var cwd = require('./');

describe('cwd:', function() {
  it('should return the absolute cwd', function() {
    assert.equal(normalize(cwd()), normalize(process.cwd()));
    assert.equal(normalize(cwd()), normalize(process.cwd()));
    assert.equal(normalize(cwd()), normalize(process.cwd()));
    assert.equal(normalize(cwd()), normalize(process.cwd()));
  });

  it('should return the absolute path relative to the cwd', function() {
    // package.json is in `fixtures/a/b/`
    assert.equal(normalize(cwd('fixtures', 'a', 'b', 'c')), normalize(path.join(process.cwd(), 'fixtures/a/b')));
  });
});
