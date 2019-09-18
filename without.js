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

const without = function(source, itemsToRemove){
  let output = [];
  for (let i = 0; i < source.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]){
       source.splice(i,1);
      }
    }
    
  }
return source
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

/*assertEqual(middle([1]), []); // => []
assertEqual(middle([1, 2]), []); // => []
assertEqual(middle([1, 2, 3]), [2]); // => [2]
assertEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12]), [6, 7]); // => [3, 4] */