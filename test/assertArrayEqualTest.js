const assert = require('chai').assert;
const assertArrayEqual = require('../assertArrayEqual')

// assertArrayEqual([1, 2, 3], [1, 2, 3]); 
// assertArrayEqual([1, 2, 3], [3, 2, 1]);

describe('#assertArrayEqual', () => {
  it("returns true for 1, 2, 3 for [1, 2, 3]", () => {
    assert.strictEqual(assertArrayEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for 1, 2, 3 for 3, 2, 1", () => {
      assert.strictEqual(assertArrayEqual([1, 2, 3], [3, 2, 1]));
  });
  
});