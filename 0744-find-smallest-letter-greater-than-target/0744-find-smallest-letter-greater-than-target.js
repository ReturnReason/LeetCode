/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    // target 문자보다 더 큰 문자 중에 제일 작은 거 반환
    // 없으면 letters 배열의 첫 번째 letter 반환
    
    const targetCode = target.charCodeAt();
    const arr = [];
    let has = false;
    
    for(let l of letters){
        const lCode = l.charCodeAt()
        if(lCode > targetCode) {
            arr.push(lCode);
            has = true;
        }
    }
    
    return !has ? letters[0] : String.fromCharCode(arr[0]);
};