//https://www.codewars.com/kata/5a0178f66f793bc5b0001728/train/javascript

function longestPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  str = str.split('').sort();
  let palindr = '';
  for (let i = str.length; i >= 0;) {
    if (str[i] === str[i - 1]) {
      palindr += str.pop();
      palindr += str.pop();
      i -= 2;
    } else {
      i--;
    }
  }
  if (palindr.length % 2 === 0 && str.length > 0) {
    return palindr.length + 1;
  } else {
    return palindr.length;
  }
}