// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript

function wordValue(a) {
    const alph = ' abcdefghijklmnopqrstuvwxyz';
    a = a.map(word => word
        .split('')
        .map(letter => alph.indexOf(letter))
        .reduce((acc, curr) => acc + curr, 0))
        .map((num, i) => num * (i + 1));
    return a;
}