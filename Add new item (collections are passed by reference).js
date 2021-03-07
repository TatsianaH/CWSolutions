// https://www.codewars.com/kata/566dc05f855b36a031000048/train/javascript

function addExtra(arr){
    let arr1 = arr.slice(0);
    let max = Math.max(...arr1);
    arr1[arr1.length] = max + 1;
    return arr1;
}

