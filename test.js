'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var normalize = require('normalize-path');
var cwd = require('./');

function absolute(fp) {
  return normalize(path.join(process.cwd(), fp || ''));
}

describe('cwd:', function() {
  it('should return the absolute filepath to the cwd', function() {
    assert.equal(normalize(cwd()), absolute());
  });

  it('should return the absolute filepath to the given file', function() {
    assert.equal(normalize(cwd('package.json')), absolute('package.json'));
  });

  it('should return the absolute path relative to the cwd', function() {
    assert.equal(normalize(cwd('fixtures', 'a', 'b', 'c')), absolute('fixtures/a/b/c'));
  });
});
