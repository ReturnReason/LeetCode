/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const ss = s.split(' ');
  let str = '';
  
  ss.forEach((a) => {
    str += [...a].reverse().join('');
    str += ' ';
  });
  
  return str.trimEnd();
};