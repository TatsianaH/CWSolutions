// https://www.codewars.com/kata/56b0bc0826814364a800005a/train/javascript

function cyclops(n) {
    n = n.toString(2);
    if(n.length % 2 === 0) return false;
    else {
        const ind = (n.length - 1) / 2;
        if(n.slice(0, ind) === n.slice(ind + 1) && n[ind] === '0') return true;
        else return false;
    }
}