/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const cnt = {}

    tasks.forEach((t, i) => {
      if(cnt[t]){
        cnt[t]++;
      } else {
        cnt[t] = 1;
      }
    })

    let ret = 0;

    for(const c in cnt){
      if(cnt[c] === 1) return ret = -1;
      if(cnt[c] % 3){
        ret += Math.floor(cnt[c] / 3) + 1;
      } else {
        ret += Math.floor(cnt[c] / 3);
      }
    }

    return ret;
};