//https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript

var lengthOfSequence = function (arr, n) {
const arr2 = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === n) arr2.push(i);
  }
    if(arr2.length > 2 || arr.length <= 1) {
      return 0;
    } else {
      return arr2[1] - arr2[0] + 1;
    }
};