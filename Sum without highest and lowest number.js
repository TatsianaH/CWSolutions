//https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript

  function sumArray(arr) {
    if(!arr || !arr.length || arr.length <= 1){
      return 0;
    }
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
      for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(max < arr[i]) {
          max = arr[i];
       }
        if(min > arr[i]) {
          min = arr[i];
        }
      }
    return sum - max - min;
  }