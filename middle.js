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

module.exports = middle;