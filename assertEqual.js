const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assert Passed: " + actual + " === " + expected);
  } else {
    console.log("❌❌❌Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

