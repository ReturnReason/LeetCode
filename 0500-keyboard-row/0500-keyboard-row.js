/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const keys = 'qwertyuiopasdfghjklzxcvbnm';
    const ret = [];

    words.forEach((w) => {
      let stop = false;

      for(let i = 0; i < w.length; i++){
        if(w.length === 1){
          break;
        }
        
        let j = i + 1;
        if(j === w.length) break;

        let a = keys.search(w[i].toLowerCase());
        let b = keys.search(w[j].toLowerCase());

        if( (a >= 0 && a <= 9 && b >= 0 && b <= 9) || 
           (a >= 10 && a <= 18 && b >= 10 && b <= 18) || 
           (a >= 19 && a <= 25 && b >= 19 && b <= 25)){
        } else {
          stop = true;
          break;
        }
         
      }
      
      if(!stop) ret.push(w);
    })
    
  
    return ret;
};