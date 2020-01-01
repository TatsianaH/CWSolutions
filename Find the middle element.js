// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

var gimme = function (inputArray) {
  const arr = [...inputArray].sort((a, b) => a - b);
  return inputArray.indexOf(arr[1]);
};