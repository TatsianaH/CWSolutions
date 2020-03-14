// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
 let arr2 = [];
 let arr0 = [];
 for(let i = 0; i < arr.length; i++){
   if(arr[i] !== 0){
     arr2.push(arr[i]);
    } else {
      arr0.push(arr[i]);
    }
  }
  return arr2.concat(arr0);
}
