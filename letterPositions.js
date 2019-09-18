
//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`❌❌❌Assert Failed:  ${actual}  ===   ${expected}`);
    }
    return console.log(`✅✅✅ Assert Passed:  ${actual}  ===   ${expected}`);
    
  }
  const letterPositions = function(sentence){
    let result = {};
    for (let i = 0; i < sentence.length; i++){
      if (result[sentence[i]]){
        result[sentence[i]].push(i); 
      } else {
        result[sentence[i]] = [i];
      }
    }
    return result;
  };
const result1 = letterPositions("Lighthouse in the house");

console.log(result1);

assertEqual(result1["h"], [3,5,15,18]);
