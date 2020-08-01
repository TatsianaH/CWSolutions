// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) return -1;
    a1 = a1.map(el => el.length);
    let min1 = Math.min(...a1);
    let max1 = Math.max(...a1);
    a2 = a2.map(el => el.length);
    let min2 = Math.min(...a2);
    let max2 = Math.max(...a2)
    return Math.abs(min1 - max2) > Math.abs(max1 - min2) ? Math.abs(min1 - max2) : Math.abs(max1 - min2);
}