// https://www.codewars.com/kata/5a8fbe73373c2e904700008c/train/javascript

function isPalindrome(s){
    for(let i = 0; i < s.length / 2; i++){
        if(s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
}

function solve(s){
    if(isPalindrome(s)) return true;
    for(let i = s.length - 1; i >= 0; i--){
        s = s[s.length - 1] + s.slice(0, s.length - 1);
        if(isPalindrome(s)) return true;
    }
    return false;
}