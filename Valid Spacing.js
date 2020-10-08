// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript

function validSpacing(s) {
    if(s.length < 1) return true;
    if(s[0] === ' ') return false;
    if(s[s.length - 1] === ' ') return false;
    for(let i = 1; i <= s.length; i++){
        if(s[i] === ' ' && s[i - 1] === ' ') return false;
    }
    return true;
}