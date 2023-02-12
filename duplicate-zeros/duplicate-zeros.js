/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i]);
      if(arr[i] === 0){
        newArr.push(0);
      }
    }
  
  
  for(let i = 0; i < arr.length; i++){
    arr[i] = newArr[i];
  }
};