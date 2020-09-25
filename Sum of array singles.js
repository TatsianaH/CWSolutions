// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

function repeats(arr){
    const arr1 = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
    return arr1[0] + arr1[1];
};