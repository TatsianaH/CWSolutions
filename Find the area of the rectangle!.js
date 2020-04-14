// https://www.codewars.com/kata/580a0347430590220e000091/train/javascript

function area(d,l){
    if(d <= l) return 'Not a rectangle';
    const w = Math.sqrt(d ** 2 - l ** 2);
    const sq = w * l;
    return +sq.toFixed(2);
}