// https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript

function findEvenIndex(arr){
  for(let i = 0; i < arr.length; i++){
    const sum1 = arr.slice(0, i).reduce((acc, curr)=> acc + curr, 0);
    const sum2 = arr.slice(i + 1).reduce((acc, curr)=> acc + curr, 0);
    if(sum1 === sum2){
      return i;
    }
  }
   return -1;
}
