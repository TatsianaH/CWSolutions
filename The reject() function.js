// https://www.codewars.com/kata/52988f3f7edba9839c00037d/train/javascript

function reject(a, p) {
    return a.filter(el => !p(el));
}