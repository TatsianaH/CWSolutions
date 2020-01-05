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


  //2 case

  function sumArray(arr) {
    if(!arr || !arr.length || arr.length <= 1){
      return 0;
    }
    return arr.sort((a, b) => a - b).slice(1, arr.length -1).reduce((a, b) => a + b, 0);
  }
  // 3 case
function sumArray(arr) {
  if(!arr || arr.length === 0 || arr.length === 1) return 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return arr.reduce((a, b) => a + b, 0) - min - max;
}