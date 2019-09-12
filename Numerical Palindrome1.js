//https://www.codewars.com/kata/numerical-palindrome-number-1/train/javascript

function palindrome(num) {
  let str = '';
  if(typeof num !== 'number' || num < 0){
    return 'Not valid';
  }
  str += num;
  for(let i = 0; i < Math.floor(str.length/2); i++){
    if(str[i] !== str[str.length - 1- i]){
      return false;
    }
  }
  return true;
}