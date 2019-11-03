//https://www.codewars.com/kata/a-gift-well-spent/train/javascript

var buy = function(x, arr){
  for(let i = 0; i< arr.length; i++){
    for(let j = 1; j < arr.length; j++){
      if(arr[i] + arr[j] === x){
        return [i, j];
      }
    }
  }
  return null;
};