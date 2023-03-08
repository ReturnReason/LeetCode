/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const stk = [];
  const result = [];
  
  for(let i = 0; i < temperatures.length; i++){
    
    while(stk.length && temperatures[stk[stk.length - 1]] < temperatures[i]){
      const item = stk.pop();
      result[item] = i - item;    
    }
    
    stk.push(i);
  }
  
  while(stk.length){
    const idx = stk.pop();
    result[idx] = 0;
  }
  
  return result;
};