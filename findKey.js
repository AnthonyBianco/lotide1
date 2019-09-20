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

const findKey = function(object, callback){
  const results = [];

  for (let item in object) {
    if (callback(object[item])){
     return item;
    }
  }
};


assertEqual(eqArrafindKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 },
}, x => x.stars === 2) // => "noma"

// run over keys and then for each key run the callback

