/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  
    const items = [];
    arr.forEach((a) => items.push((a.toString(2))))
    const count = items.map((n, i) => [arr[i], n.split('0').join('').length]);
  
    count.sort((a, b) => {
      if(a[1] !== b[1]) return +(a[1] > b[1]) || +(a[1] === b[1]) - 1; 
      else return +(a[0] > b[0]) || +(a[0] === b[0]) - 1;
    })    
  
  return count.map((a) => a[0]);
};