const eqArrays = function(actual, expected){
  for (let i = 0; i < actual.length; i++){
    if (actual[i] !== expected[i]){
      return console.log(`❌❌❌ Assert Failed: ${actual}  !==   ${expected}`);
    }
  }
  return console.log(`✅✅✅ Assert Passed: ${actual}  ===   ${expected}`);
}


eqArrays([1, 2, 3], [1, 2, 3]); 
eqArrays([1, 2, 3], [3, 2, 1]); 