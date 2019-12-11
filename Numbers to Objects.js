// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

function numObj(s){
    const arr = [];
    for(let i = 0; i < s.length; i++){
        arr[i] = {};
        arr[i][s[i]] = String.fromCharCode(s[i]);
    }
    return arr;
}