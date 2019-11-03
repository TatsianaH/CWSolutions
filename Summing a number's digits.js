//https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

function sumDigits(number) {
  let num = number.toString().replace(/[^0-9]/, '')
          .split('').map(el => +el).reduce((a, b) => a + b, 0);
  return num;
}
