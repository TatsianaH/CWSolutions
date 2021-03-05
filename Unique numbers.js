// https://www.codewars.com/kata/568f9bd9cbe89334c900000c/train/javascript

function uniqueNumbers(arr) {
    return arr.filter((el, i) => arr.indexOf(el) === i);
}