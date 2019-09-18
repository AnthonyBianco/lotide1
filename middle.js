const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assert Passed:  ${actual}  ===   ${expected}`);
    return true
  } else {
    console.log(`❌❌❌Assert Failed:  ${actual}  ===   ${expected}`);
    return false
  } 
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

const middle = function(a){
  let arrayTwo = [];
  if (a.length <= 2){
  } else if ((a.length - 1) % 2 === 0) {
    arrayTwo.push(a[Math.floor((a.length / 2))]); 
  } else {
    arrayTwo.push(a.length / 2);
    arrayTwo.push((a.length / 2) +1);
  }
  return arrayTwo;
};
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12])); // => [3, 4]