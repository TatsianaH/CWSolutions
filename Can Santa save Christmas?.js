// https://www.codewars.com/kata/can-santa-save-christmas/train/javascript

function determineTime(d){
    d = d.map(el => el.split(':'))
        .map((el, i) => el[0] * 1 + el[1] / 60 + el[2] / 3600)
        .reduce((acc, curr) => acc + curr, 0);
    return d <= 24;
}