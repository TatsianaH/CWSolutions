// https://www.codewars.com/kata/sum-of-array-averages/train/javascript

const sumAverage = (arr) => {
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    let sum = arr[i].reduce((a, b) => a + b, 0);
    let l = arr[i].length;
    result += sum / l;
  }
  return Math.floor(result);
}