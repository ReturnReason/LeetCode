/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const [n1, n2, n3, n4] = num.toString().split('').map(Number).sort((a, b) => a - b);
    let ret1 = n1.toString() + n3.toString();
    let ret2 = n2.toString() + n4.toString();
    
    return +ret1 + +ret2;
};