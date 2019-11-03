//https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7/train/javascript

function maxTriSum(numbers){
  let a = numbers.filter((el, i) => i === numbers.indexOf(el)).sort((a, b) => b - a);
  let res = a[0] + a[1] + a[2];
  return res;
}