// https://www.codewars.com/kata/find-the-stray-number/train/javascript

function stray(num) {
  let res = +num.filter((el, i) => i === num.indexOf(el) && i === num.lastIndexOf(el)).join('')
  return res;
}