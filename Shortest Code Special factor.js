//https://www.codewars.com/kata/shortest-code-special-factor/train/javascript

var sc = n=>{
  return [...Array(n).keys(),n]
    .filter(v=>n%v === 0)
    .filter(v=>n.toString(2).includes(v.toString(2)));
}