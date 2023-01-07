/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit = function(gas, cost) {
    const sumG = gas.reduce((p, c) => p + c);
    const sumC = cost.reduce((p, c) => p + c);
    
    if(sumC > sumG) return -1;
    
    let amountOfGas = 0;
    let idx = 0;
    for(let i = 0; i < gas.length; i++){
        amountOfGas += gas[i] - cost[i];
        
        if(amountOfGas < 0) {
            amountOfGas = 0;
            idx = i + 1;
        }
    }
    
    return idx;
};