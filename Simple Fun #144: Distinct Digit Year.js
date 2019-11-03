//https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

function distinctDigitYear(year) {
  let yearNew = 0;
  for(let i = year + 1; i <= 9012; i++){
    let digits = i.toString().split('');
    if(digits[0] !== digits[1]
      && digits[1] !== digits[2]
      && digits[2] !== digits[3]
      && digits[3] !== digits[4]
      && digits[0] !== digits[2]
      && digits[1] !== digits[3]
      && digits[0] !== digits[3]
      && digits[0] !== digits[4]
      && digits[1] !== digits[4]
      && digits[2] !== digits[4]){
        yearNew = +digits.join('');
        return yearNew;
    }
  }
}