/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s.trim().length) return true;
    if(s.length === 1) return true;
    
    s = s.trim().toLowerCase().split(' ').join('').split('');
    
    let c = '';
    for(let i = 0; i < s.length; i++){
        if(s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122){
           c += String.fromCharCode(s[i].charCodeAt(0))
            continue;
        }
        
        if(['0','1','2','3','4','5','6','7','8','9'].includes(s[i])){
            c += s[i];
        }
    }  
    
    
    for(let i = 0; i < ~~(s.length/2); i++){
        if(c[i] !== c[c.length - 1 - i]) return false;
    }
    
    return true;
};