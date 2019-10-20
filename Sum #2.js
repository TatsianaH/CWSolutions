//https://www.codewars.com/kata/5873a8890565844b910001f8/train/javascript

function sum(a) {
  if(a === undefined) return 0;
  return function (next){
  if(next === undefined) return a;
  return sum(a + next);
  }
}
