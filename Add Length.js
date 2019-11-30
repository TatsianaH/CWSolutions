// https://www.codewars.com/kata/add-length/train/javascript

function addLength(str) {
    const arr = str.split(' ').map(el => `${el} ${el.length}`);
    return arr;
}
