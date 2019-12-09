// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

function arithmetic(a, b, operator){
    const obj = {
        add: a + b,
        subtract: a - b,
        multiply: a * b,
        divide: a / b,
    };
    return obj[operator];
}