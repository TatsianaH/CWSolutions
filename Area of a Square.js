// https://www.codewars.com/kata/area-of-a-square/train/javascript

function squareArea(A){
    let radius = A * 4 / (2 * Math.PI);
    return +(Math.pow(radius, 2)).toFixed(2);
}