// https://www.codewars.com/kata/smallest-difference/train/javascript

function smallestDiff(arr1, arr2) {
   if(arr1.length === 0 && arr2.length === 0) return -1;
   if(arr1.length === 0 && arr2.length > 0 ) return Math.min(...arr2);
   if(arr2.length === 0 && arr1.length > 0 ) return Math.min(...arr1);
   let arr3 = [];
   for(let i = 0; i < arr1.length; i++){
     for(let j = 0; j < arr2.length; j++){
       arr3.push(Math.abs(arr1[i] - arr2[j]));
    }
  }
  return Math.min(...arr3)
}