/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();
  
  for(let a of magazine){
    map.set(a, (map.get(a) || 0) + 1);
  }
  
  for(let s of ransomNote){
    if(!map.get(s)) return false;  
    else map.set(s, map.get(s) - 1);
  }
  
  return true;
};