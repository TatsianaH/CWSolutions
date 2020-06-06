// https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript

function isPalindrome(str){
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

function palindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if(isPalindrome(s)) return true;
    else return false;
}