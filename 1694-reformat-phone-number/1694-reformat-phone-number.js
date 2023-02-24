/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  let n = number.replace(/-| /g, '');
  const ret = [];
  
  while(n.length){
    if(n.length >= 4){
      if(n.length === 4){
        ret.push(n.slice(0, 2));
        n = n.slice(2);
      } else{
        ret.push(n.slice(0, 3));
        n = n.slice(3);
      }
    } else {
      if(n.length === 3){
        ret.push(n.slice(0, 3));
        n = n.slice(3);
      } else {
        ret.push(n.slice(0, 2));
        n = n.slice(2);
      }
    }
  }
  
  return ret.join('-');
};