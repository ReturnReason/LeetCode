/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 1) return 1;
    
    const splitS = s.split(' ');
    for(let i = splitS.length - 1; i >= 0; i--){
        if(splitS[i] !== ''){
            return splitS[i].length;
        }
    }
};