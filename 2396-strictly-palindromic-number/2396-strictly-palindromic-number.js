/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for(let i = 2; i <= n - 2; i++){
      if(!isPalin(n, i)) return false;
    }
    return true;
};

function isPalin(n, i){
  const b = n.toString(i);
  let l = n.length - 1;

  for(let i = 0; i <= Math.floor(b.length / 2); i++){
    if(b[i] !== b[l--]) return false;
  }
  
  return true;
}