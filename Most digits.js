//https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(arr){
  const res = arr.map(el => el.toString());
  let max = res[0];
  for(let i = 0; i < res.length; i++){
    if(max.length < res[i].length) max = res[i];
  }
  return +max;
}