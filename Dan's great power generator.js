// https://www.codewars.com/kata/582c42e0f000e54a7d000086/train/javascript

function danspower(num, power) {
    let n = Math.pow(num, power);
    return n % 2 === 0 ? n : Math.round(n / 10) * 10;
}
