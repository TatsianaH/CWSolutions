//https://www.codewars.com/kata/nth-smallest-element-array-series-number-4/train/javascript

function nthSmallest(arr, pos){
  arr.sort((a, b)=> a - b);
  return arr[pos - 1];
}