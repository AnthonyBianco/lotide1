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


const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, words => words[0]); //arguement two is always a functoin with a map

assertEqual(eqArrays(results1,["g","c","t","m","t"]), true);