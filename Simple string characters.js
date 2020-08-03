// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

function solve(s){
    let res = [0, 0, 0, 0];
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < s.length; i++){
        if(alph.toUpperCase().includes(s[i])) res[0]++;
        else if(alph.includes(s[i])) res[1]++;
        else if('0123456789'.includes(s[i])) res[2]++;
        else res[3]++;
    }
    return res;
}