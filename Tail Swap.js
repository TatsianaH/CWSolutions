// https://www.codewars.com/kata/tail-swap/train/javascript

function tailSwap(arr) {
    let ind1 = arr[0].indexOf(':');
    let ind2 = arr[1].indexOf(':');
    let res = [arr[0].slice(0, ind1) + arr[1].slice(ind2), arr[1].slice(0, ind2) + arr[0].slice(ind1)];
    return res;
}