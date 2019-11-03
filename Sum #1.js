//https://www.codewars.com/kata/sum-number-1/train/javascript

function sum(num) {
  if(num === undefined) return 0;
  return function(next) {
    if(next === undefined) return num;

    return sum(num + next);
  }
}