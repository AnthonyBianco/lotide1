let head = function(parameter){
  return parameter[0];
} 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assert Passed: " ${actual} " === "  ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} " !== " ${expected}`);
  }
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");