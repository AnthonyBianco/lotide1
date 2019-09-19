const data1 = [1,2,5,7,2,-1,2,4,5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

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


const takeUntil = function(array, callback){
  const results = [];
  for (let item of array) {
    if (callback(item) === true){
      return results
    }
    results.push(item);
  }
  return results;
};

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

assertEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true);
assertEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]
), true);


// expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

