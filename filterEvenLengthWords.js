// https://www.codewars.com/kata/59564f3bcc15b5591a00004a/train/javascript

function filterEvenLengthWords(w) {
    let res = w.filter(el => el.length % 2 === 0);
    return res;
}