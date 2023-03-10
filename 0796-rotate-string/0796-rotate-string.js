/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
  const len = s.length;
  const ret = s.split('');
  
  for(let i = 0; i < len; i++){
    ret.push(s[i]);
    if(ret.slice(i, i + len).join('') === goal) return true;
  }
  
  return false;
};