/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if(!s) return 0;
  
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
  
    let i = 0;
    let ret = 0;
    s.forEach((c) => {
      if(c >= g[i]){
        ret++;
        i++;
      }
    })
  
    return ret;
 };