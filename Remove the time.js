// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

function shortenToDate(l) {
    const ind = l.indexOf(',');
    return l.slice(0, ind);
}