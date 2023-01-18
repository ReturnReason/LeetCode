/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const binaryA = BigInt(`0b${a}`);
    const binaryB = BigInt(`0b${b}`);
    
    return (binaryA + binaryB).toString(2);
};