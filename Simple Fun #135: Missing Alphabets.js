// https://www.codewars.com/kata/58a664bb586e986c940001d5/train/javascript

function missingAlphabets(s) {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let obj = {};
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]]) obj[s[i]] += 1;
        else obj[s[i]] = 1;
    }
    let maxNum = Math.max(...Object.values(obj));
    let letters = Object.keys(obj);
    let res = '';
    for(let i = 0; i < alph.length; i++){
        if (obj[alph[i]] === undefined ) res += alph[i].repeat(maxNum);
        else if(obj[alph[i]] !== maxNum) res += alph[i].repeat(maxNum - obj[alph[i]]);
    }
    return res;
}