// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

function alternateCase(s) {
    let word = '';
    for(let i = 0 ; i < s.length; i++){
        if(s[i] === s[i].toLowerCase()) word += s[i].toUpperCase();
        else word += s[i].toLowerCase();
    }
    return word;
}