// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s){
    let lowerCase = 0;
    let upperCase = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i].toLowerCase())lowerCase++;
        else upperCase++;
    }
    return lowerCase >= upperCase ? s.toLowerCase() : s.toUpperCase();
}