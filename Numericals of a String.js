// https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/train/javascript

function numericals(s){
    let obj = {};
    let str = '';
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]]) obj[s[i]] += 1;
        else obj[s[i]] = 1;
        str += obj[s[i]];
    }
    return str;
}