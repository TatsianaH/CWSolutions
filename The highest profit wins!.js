// https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
}