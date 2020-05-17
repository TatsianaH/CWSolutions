// https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript

function change(str){
    const alph = '0abcdefghijklmnopqrstuvwxyz';
    let res = '';
    for(let i = 1; i <= 26; i++){
        if(str.toLowerCase().includes(alph[i])) res += '1';
        else res += '0';
    }
    return res;
}