const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`❌❌❌Assert Failed:  ${actual}  ===   ${expected}`);
    }
    return console.log(`✅✅✅ Assert Passed:  ${actual}  ===   ${expected}`);
    
  }
  const countLetters = function(sentence, lettersToCount){
    
    let result = {};
    for (const letter of sentence){
      if (letter === " "){
        continue;
      } else if  (result[letter]){
        result[letter] += 1;
      } else if (!result[letter]) { 
        result[letter] = 1; 
      } 
    }
    return result;
  };
const result1 = countLetters("Lighthouse in the house");

console.log(result1);

assertEqual(result1["h"], 4);




/*  const countOnly = function(allItems, itemsToCount){
    const results = {};

    for (const item of allItems) {
      console.log(item);
      if (results[item]) {
        results[item] += 1;
      } else if (itemsToCount[item] !== null){
        results[item] = 1;
      } else {
        results[item] = null;
      }
    }
    return results;
  }*/

  /*
   let countLetters = {};
    for (const letter of sentence){
      if (letter === " "){
        continue;
      } else if  (countLetters[letter]){
        countLetters[letter] += 1;
      } else if (!countLetters[letter]) { // not in there
        countLetters[letter] = 1; 
      } 
    }
    return countLetters*/