const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual.indexOf(expected[i]) === -1) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const value1 = Object.keys(object1);
  const value2 = Object.keys(object2);
  if (!eqArrays(value1, value2)) {
    return false;
  } else {
    for (let key in object1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  if (result === false){
    return console.log(`❌❌❌ Assert Failed: ${inspect(actual)}  ===   ${inspect(expected)}`);
  } else {
    return console.log(`✅✅✅ Assert Passed:  ${inspect(actual)}  ===   ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab,ba);


