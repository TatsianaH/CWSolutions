// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

function toTime(s) {
    let h = Math.trunc(s/3600);
    let m = Math.trunc((s - h * 3600)/ 60);
    return `${h} hour(s) and ${m} minute(s)`;
}