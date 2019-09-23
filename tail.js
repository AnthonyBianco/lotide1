let parameter2 = [];
let tail = function(parameter) {
  for (let i = 0; i < parameter.length; i++) {
    parameter2.push(parameter[i]);
  }
};

module.exports = tail; 