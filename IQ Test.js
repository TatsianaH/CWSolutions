//https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

function iqTest(numbers){
  const arr = numbers.split(' ').map(el => +el);
  let res1 = arr.filter(el => el % 2 === 0);
  let res2 = arr.filter(el => el % 2 === 1);
  return res1.length < res2.length ? (arr.indexOf(res1[0]) + 1) : (arr.indexOf(res2[0]) + 1);
}