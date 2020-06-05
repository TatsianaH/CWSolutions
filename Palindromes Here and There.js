// https://www.codewars.com/kata/5838a66eaed8c259df000003/train/javascript

function convertPalindromes(n) {
    let arr = [];
    for(let i = 0; i< n.length; i++){
        let s = String(n[i]);
        let sRev = s.split('').reverse().join('');
        if(s === sRev) arr.push(1);
        else arr.push(0);
    }
    return arr;
};