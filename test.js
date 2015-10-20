'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var normalize = require('normalize-path');
var cwd = require('./');

describe('cwd:', function() {
  it('should return the absolute cwd', function() {
    assert.equal(normalize(cwd()), normalize(process.cwd()));
  });

  it('should return the absolute path relative to the cwd', function() {
    // package.json is in `fixtures/a/b/`
    assert.equal(normalize(cwd('fixtures', 'a', 'b', 'c')), normalize(path.join(process.cwd(), 'fixtures/a/b/c')));
  });
});
