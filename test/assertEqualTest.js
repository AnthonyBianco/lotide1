const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
assertEqual("Lighthouse labs","bootcamp");
assertEqual(1,1);

describe("#assertEqual", () => {
  it("returns false if Lighthouse labs != bootcamp", () => {
    assert.strictEqual(assertEqual("Lighthouse labs", "bootcamp"));
  });
});

it("returns true if 1 equals 1", () => {
  assert.strictEqual(assertEqual('1', '1')); 
});
