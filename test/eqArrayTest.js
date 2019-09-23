const eqArray = require('../eqArray');
const assert = require('chai').assert;

describe("#eqArray", () => {
  it("returns truw is 1,2,3 = 1,2,3", () => {
    assert.strictEqual(eqArray([1,2,3], [1,2,3]), true);
  });
});



//assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); // => should PASS