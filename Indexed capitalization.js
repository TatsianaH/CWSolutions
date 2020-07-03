// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

function capitalize(s,arr){
    let str = '';
    for(let i = 0; i < s.length; i++){
        if(arr.includes(i)) str += s[i].toUpperCase();
        else str += s[i];
    }
    return str;
};