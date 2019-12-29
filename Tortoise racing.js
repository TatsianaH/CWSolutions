// https://www.codewars.com/kata/tortoise-racing/train/javascript

function race(v1, v2, g) {
    if (v1 >= v2) return null;
    let time = (g / (v2 - v1)) * 3600 ;
    let arr = [];
    arr[0] = Math.floor(time / 3600);
    arr[1] = Math.floor((time / 60) - 60 * arr[0]);
    arr[2] = Math.floor(time % 60);
    return arr;
}