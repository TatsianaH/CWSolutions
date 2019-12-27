// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

function dontGiveMeFive(start, end){
  let count = 0;
  for(let i = start; i <= end; i++){
    if(i.toString().includes('5')){
      count -= 1;
    }
    count++;
  }
  return count;
}