// https://www.codewars.com/kata/5983cba828b2f1fd55000114/train/javascript

function oddOne(arr) {
    return arr.findIndex((el, i) => Math.abs(el % 2) === 1);
}