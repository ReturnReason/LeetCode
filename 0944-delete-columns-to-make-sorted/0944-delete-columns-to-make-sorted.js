/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const arr = [];
    let ret = 0;
    
    strs[0].split('').forEach((s, i) => {
        arr.push([s]);
    })
    
    strs.slice(1).forEach((s)=>{
        s.split('').forEach((ss, j)=>{
            arr[j].push(ss);
        })
    })
    
    const sortArr = [];
    arr.forEach((a) => {
        sortArr.push([...a].sort().join(''));
    })
    
    arr.forEach((a, i) => {
        if(a.join('') !== sortArr[i]) ret++;
    })
    
    return ret;
};