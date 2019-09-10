//https://www.codewars.com/kata/numerical-palindrome-number-1/train/javascript

function palindrome(num) {
if(typeof num !== 'number' || num < 0){
  return 'Not valid';
  }
  const arr = +(num.toString().split('').reverse().join(''));
  return arr === num;
}