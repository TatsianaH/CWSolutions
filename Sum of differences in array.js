// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
  let res = 0;
  if(arr.length === 1 || arr.length === 0){
    return 0;
  }
  arr.sort((a, b) => b - a);
  for(let i = 0; i < arr.length - 1; i++){
    res += (arr[i] - arr[i + 1]);
  }
  return res;
}
