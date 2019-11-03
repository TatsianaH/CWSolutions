//https://www.codewars.com/kata/51f1342c76b586046800002a/train/javascript

function solution(n) {
  n = n.toString().split('.');
  const arr = [n[0]];
  if (n[1].length === 1) {
    if (n[1] < 3) {
      return +arr.join('');
    } else if (n[1] < 7) {
      arr[1] = 5;
    } else {
      arr[0] = +n[0] + 1;
    }
  } else {
    n[1] = n[1].slice(0, 2);
    if (n[1] < 26) {
      return +arr.join('');
    } else if (n[1] < 75) {
      arr[1] = 5;
    } else {
      arr[0] = +n[0] + 1;
    }
  }

  return +arr.join('.')
}