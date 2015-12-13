'use strict';

require('mocha');
var assert = require('assert');
var sortArrays = require('./');

describe('sort-object-arrays', function() {
  it('should export a function', function() {
    assert.equal(typeof sortArrays, 'function');
  });

  it('should sort array elements', function() {
    var obj = sortArrays({foo: ['z', 'a', 'b']});
    assert(obj.foo[0] === 'a');
    assert(obj.foo[1] === 'b');
    assert(obj.foo[2] === 'z');
  });

  it('should sort array elements on a nested property', function() {
    var obj = sortArrays({foo: {bar: {baz: ['z', 'a', 'b']}}});
    assert(obj.foo.bar.baz[0] === 'a');
    assert(obj.foo.bar.baz[1] === 'b');
    assert(obj.foo.bar.baz[2] === 'z');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      sortArrays();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected target to be an object');
      cb();
    }
  });
});
