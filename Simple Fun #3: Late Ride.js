// https://www.codewars.com/kata/588422ba4e8efb583d00007d/train/javascript

function lateRide(n) {
    let m = n % 60;
    let h = (n - m) / 60;
    let res = ('' + h + m).split('').map(el => +el).reduce((a, b) => a + b, 0)
    return res;
}

