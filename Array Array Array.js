//https://www.codewars.com/kata/57eb936de1051801d500008a/solutions/javascript

function explode(x){
  let rept = x.filter(el => typeof el === 'number').reduce((a, b) => a + b, 0);
  return rept ? new Array(rept).fill(x) : 'Void!';
}