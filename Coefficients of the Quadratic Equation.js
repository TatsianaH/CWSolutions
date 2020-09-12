// https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript

function quadratic(x1, x2){
    // х² + px + q = 0
    // ax^2 + bx + c = 0
    const b = -x1 - x2;
    const c = x1 * x2;
    return [1, b, c];
}