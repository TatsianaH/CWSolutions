// https://www.codewars.com/kata/what-is-type-of-variable/train/javascript

function type(value) {
    return {}.toString.call(value)
        .replace('object', '').replace(/\W/g, '').toLowerCase();
}