// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr, n){
    arr = arr.map(el => el.toFixed(2));
    return arr.filter(el => el < n).length;
}
