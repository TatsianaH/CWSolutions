//https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript

function gps(s, x) {
const arr =[];
for(let i = 1; i < x.length; i++){
  let speed = Math.floor((3600 * (x[i] - x[i - 1])) / s);
  arr.push(speed);
}
  let res = Math.max(...arr);
  return res > 0 ? res : 0;
}
