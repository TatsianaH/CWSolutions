// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

function meeting(s) {
  let str = s.toUpperCase().replace(/:/g, ',').split(';');
  for(let i = 0; i < str.length; i++){
    str[i] = '(' + str[i].split(',').reverse().join(', ') + ')';
  }
  str = str.sort().join('');
  return str;
}