const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    return console.log(`❌❌❌Assert Failed:  ${actual}  ===   ${expected}`);
    }
    return console.log(`✅✅✅ Assert Passed:  ${actual}  ===   ${expected}`);
  }

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

const flatten = function(array){  
  var merged = [].concat.apply([], array);
  return merged;
};

console.log(assertEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));