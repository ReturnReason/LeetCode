/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {  
  
  const mg = (a1, a2) => {
    const ret = [];
    let i = 0;
    let j = 0;

    while(i < a1.length && j < a2.length){
      if(a1[i] < a2[j]) ret.push(a1[i++]);
      else ret.push(a2[j++]);
    }

    if(i < a1.length) ret.push(...a1.slice(i))
    if(j < a2.length) ret.push(...a2.slice(j))

    return ret;
  }
  
  const s = (a) => {
    if(a.length <= 1) return a;
    
    let mid = Math.floor(a.length / 2);
    return mg( s(a.slice(0, mid)), s(a.slice(mid)));
  }

  return s(nums);  
};


