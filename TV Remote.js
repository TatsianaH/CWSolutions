// https://www.codewars.com/kata/tv-remote/train/javascript

var tvRemote = (function() {
    let obj = {'a': [0, 0], 'b': [0, 1], 'c': [0, 2], 'd': [0, 3], 'e': [0, 4],
        '1': [0, 5], '2': [0, 6], '3': [0, 7], 'f': [1, 0], 'g': [1, 1],
        'h': [1, 2], 'i': [1, 3], 'j': [1, 4], '4': [1, 5], '5': [1, 6],
        '6': [1, 7], 'k': [2, 0], 'l': [2, 1], 'm': [2, 2], 'n': [2, 3],
        'o': [2, 4], '7': [2, 5], '8': [2, 6], '9': [2, 7], 'p': [3, 0],
        'q': [3, 1], 'r': [3, 2], 's': [3, 3], 't': [3, 4], '.': [3, 5],
        '@': [3, 6], '0': [3, 7], 'u': [4, 0], 'v': [4, 1], 'w': [4, 2],
        'x': [4, 3], 'y': [4, 4], 'z': [4, 5], '_': [4, 6], '/': [4, 7]};
    return function(word) {
        let arr = [0, 0];
        return [...word].map(x => { let temp = Math.abs(obj[x][0] - arr[0]) + Math.abs(obj[x][1] - arr[1]) + 1; arr = [...obj[x]]; return temp;})
            .reduce((a, b) => a + b, 0);
    }
})();


// 2 version

const tvRemote = function(word) {
  let keys = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/';
  let pos = [ 0, 0 ];
  let res = 0;
  for (let char of word) {
    let i = keys.indexOf(char);
    let dest  = [ i / 8 | 0, i % 8 ];
    res += Math.abs(dest[0] - pos[0]) + Math.abs(dest[1] - pos[1]) + 1;
    pos = dest;
  }
  return res;
};