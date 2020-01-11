// https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript

function converter (mpg) {
    let res = mpg * 1.609344 /4.54609188;
    res = Math.trunc(Math.round(res * 100)) / 100
    return res;
}