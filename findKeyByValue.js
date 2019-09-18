// It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`❌❌❌Assert Failed:  ${actual}  ===   ${expected}`);
    }
    return console.log(`✅✅✅ Assert Passed:  ${actual}  ===   ${expected}`);
    
  }
  
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
  };

  const findKeyByValue = function(tvShows, genre){ 
    for (let key in tvShows){
    if (tvShows[key] === genre){
      return key;
    } 
  }
  }

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);