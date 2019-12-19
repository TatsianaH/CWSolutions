// https://www.codewars.com/kata/586a3270c66d18ad810001d4/train/javascript

Array.prototype.only = function(keys){
    let arr = [];
    keys = keys.sort((a, b) => a - b);
    keys.forEach(key => arr.push(this[key]));
    return arr;
}