//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

  function squareDigits(num){
    return +(num.toString().split('').map(el => el ** 2).join(''));
  }

  // 2 case

function squareDigits(num){
  let res = '';
  num = num.toString();
  for(let i = 0; i < num.length; i++){
    res += Math.pow(num[i], 2);
  }
  return +res;
}