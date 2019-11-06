//https://www.codewars.com/kata/simple-fun-number-10-range-bit-counting/train/javascript

function rangeBitCount(a, b) {
  let arr = [];
  for(let i = a; i <= b; i++){
    arr.push(i);
  }
    let bin = arr.map(el => el.toString(2).split(''));
    let res = bin.reduce((a, b) => a.concat(b), []).filter(el => el === '1').length;
    return res;
}