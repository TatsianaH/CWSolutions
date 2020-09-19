// https://www.codewars.com/kata/5733d6c2d780e20173000baa/train/javascript

function maxMin(arr1,arr2){
    let arr = [];
    for(let i = 0; i < arr1.length; i++){
        arr.push(Math.abs(arr1[i] - arr2[i]));
    }
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return [max, min];
}