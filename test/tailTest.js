const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("return labs when given yo yo yo, lighthouse, labs", () => {
    assert.strictEqual(assertEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3));
});
});


// Test Case: Check  the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!