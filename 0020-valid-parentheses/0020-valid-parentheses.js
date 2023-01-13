/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1) return false;
    
    const splitS = s.split('');
    const obj = {
        '[' : ']',
        '(' : ')',
        '{' : '}'
    }
    
    const stk = [];
    
    for(let i = 0; i < splitS.length; i++){
        if(splitS[i] === '(' || splitS[i] === '{' ||  splitS[i] === '['){
            stk.push(splitS[i]);
        } else {
            if(!stk.length) return false;
            if(obj[stk.pop()] !== splitS[i]) return false;
        }
    }
    
    if(stk.length) return false;
    return true;
};