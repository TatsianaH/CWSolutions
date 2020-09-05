// https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript

function solve(eq) {
    let res = '';
    let num = '';
    for (let i = eq.length - 1; i >= 0; i--) {
        if (eq[i] >= 0 && eq[i - 1] <= 9) {
            num = eq[i] + num;
        } else if (eq[i] >= 0 && Number.isNaN(+eq[i - 1]) || eq[i] >= 0 && eq[i - 1] === undefined) {
            num = eq[i] + num;
            res += num;
            num = '';
        } else {
            res += eq[i];
        }
    }
    return res;
}
