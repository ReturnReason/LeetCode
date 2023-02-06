/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const ret = [];
  
  for(let i = 1; i <= n; i++){
    if(!(i % 3) && !(i % 5)) ret.push("FizzBuzz");
    else if(!(i % 5)) ret.push("Buzz");
    else if(!(i % 3)) ret.push("Fizz");
    else ret.push(i.toString());
  }
  
  return ret;
};