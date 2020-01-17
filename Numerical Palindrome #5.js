//https://www.codewars.com/kata/numerical-palindrome-number-5-1/train/javascript

function palindrome(num) {
  if(num <= 0 || !Number.isInteger(num)) return 'Not valid';
  if(num <= 9) return false;
  const arr = num.toString().split('').sort();
  let count = 0;
  for(let i = 0; i < arr.length - 1; i){
      if(arr[i] === arr[i + 1]){
        count = count + 2;
        i = i + 2;
      } else {
          i++;
      }
    }
        if(arr.length === count || arr.length === count + 1){
          return true;
        } else {
          return false;
    }
  }