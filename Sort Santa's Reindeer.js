// https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript

function sortReindeer(n) {
    let arr = n.map(el => el.split(' '));
    arr.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return 0;
        }
    });
    return arr.map(el => el.join(' '));
}