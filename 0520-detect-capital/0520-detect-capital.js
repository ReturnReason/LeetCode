/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const u = word.split('').map((w) =>{
        return w.charCodeAt(0) >= 65 && w.charCodeAt(0) <= 90;
    })

    const l = word.split('').map((w) => {
        return w.charCodeAt(0) >= 97 && w.charCodeAt(0) <= 122;
    })

    if(l[0]){
        let ret = true;
        l.forEach((isL, i) => {
            if(i > 0 && !isL) ret = false;
        })

        return ret;
    }

    if(u.every((c) => c) || u.every((l) => l)) return true;
    if(u.slice(1).every((c) => c) || l.slice(1).every((l) => l) ) return true;


    return false;
};