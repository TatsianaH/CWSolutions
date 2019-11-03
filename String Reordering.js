//https://www.codewars.com/kata/string-reordering/train/javascript

function sentence(List) {
  let arr = List.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0]);
  return arr.map(el => Object.values(el)[0]).join(' ');
}