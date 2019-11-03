//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

  function squareDigits(num){
    return +(num.toString().split('').map(el => el ** 2).join(''));
  }