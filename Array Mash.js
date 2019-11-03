//https://www.codewars.com/kata/582642b1083e12521f0000da/train/javascript

function arrayMash (arr1, arr2) {
  let arr = [];
  for(let i = 0; i < arr1.length; i++){
    arr.push(arr1[i], arr2[i]);
  }
  return arr;
}