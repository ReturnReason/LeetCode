/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  
  const map = new Map();

  for(let s1 of s){
    if(!map.get(s1)) map.set(s1, 1);
    else map.set(s1, map.get(s1) + 1);
  }

  for(let t1 of t){
    if(map.get(t1)) map.set(t1, map.get(t1) - 1);
    else return false;
  }

  return true;
};