const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assert Passed: " ${actual} " === "  ${expected}`);
  } else {
    console.log(`❌❌❌}`);
  }
};

const eqArrays = function(actual, expected){
  for (let i = 0; i < actual.length; i++){
    if (actual[i] !== expected[i]){
      return false
    }
  }
  return true
}


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); 