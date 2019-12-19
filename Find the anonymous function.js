// https://www.codewars.com/kata/55a12bb8f0fac1ba340000aa/train/javascript

var FindFunction = function(func, arr) {
    let f = func.find(el => Object.prototype.toString.call(el) === '[object Function]');
    return arr.filter(f);
}