// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n){
    const nLength = n.toString().length;
    const sq = Math.pow(n, 2);
    const lastDigit = +sq.toString().slice(-nLength);
    return lastDigit === n ? 'Automorphic' : 'Not!!';
}