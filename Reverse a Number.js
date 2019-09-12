//https://www.codewars.com/kata/reverse-a-number/train/javascript

function reverseNumber(n) {
  if(n >= 0){
    const arr = n.toString().split('').reverse();
    return +(arr.join(''));
  } else {
    n *= -1;
    return (-1) * n.toString().split('').reverse().join('');
  }
}