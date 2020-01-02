// https://www.codewars.com/kata/find-the-slope/train/javascript

function slope(p){
    let n = p[2] - p[0];
    return n !== 0 ? (p[3] - p[1])/(p[2] - p[0]) + '' : 'undefined';
}