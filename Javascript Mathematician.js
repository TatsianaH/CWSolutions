//https://www.codewars.com/kata/javascript-mathematician/train/javascript

function calculate(...a) {
  return function sum(...b){
    return [].concat(a, b).reduce((acc, curr) => acc + curr, 0);
  }
}