const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assert Passed:  ${actual}  ===   ${expected}`);
    return true
  } else {
    console.log(`❌❌❌Assert Failed:  ${actual}  ===   ${expected}`);
    return false
  } 

};

const eqArrays = function(actual, expected){
  if (actual.length !== expected.length){ 
  return false;
  } 
  for (let i = 0; i < actual.length; i++){
    if (actual[i] != expected[i]){
      return false
    }
  }
  return true
}


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); 