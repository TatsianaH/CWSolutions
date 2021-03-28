// https://www.codewars.com/kata/57ebdf944cde58f973000405/train/javascript

function reverser(s) {
    return s.split(' ').map(el => el.split('').reverse().join('')).join(' ');
}