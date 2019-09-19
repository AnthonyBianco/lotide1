const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`❌❌❌Assert Failed:  ${actual}  ===   ${expected}`);
  }
  return console.log(`✅✅✅ Assert Passed:  ${actual}  ===   ${expected}`);
    
};

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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


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


// console.log(eqObjects(birds, animals));
// assertEqual(eqObjects(birds, animals), true);

assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false




