// https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript

function validateWord(s){
    s = s.toLowerCase();
    let obj = {};
    for(let el of s){
        if(obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    const arr = Object.values(obj);
    return arr.every(el => el === obj[s[0]]);
}