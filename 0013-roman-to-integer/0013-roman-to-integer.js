/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1_000
    }
    
    let prevN;
    let ret = 0;
    
    const splitS = s.split('');
    const len = splitS.length;
    
    for(let i = 0; i < len; i++){
        if(prevN){
            if(prevN < symbols[s[i]]){
              ret -= prevN;
              ret += symbols[s[i]] - prevN;
            } else ret += symbols[splitS[i]];
        } else {
            ret += symbols[splitS[i]];
        }
        prevN = symbols[splitS[i]];
    }
    
    return ret;
};