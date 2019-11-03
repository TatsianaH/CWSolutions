//https://www.codewars.com/kata/are-the-numbers-in-order/train/javascript

function inAscOrder(arr) {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]) return false;
    }
    return true;
}