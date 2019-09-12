//https://www.codewars.com/kata/get-list-sum-recursively/train/javascript

function sumR(x) {
  if(x.length === 0) {
    return 0;
  }
    return  x.shift() + sumR(x);
}