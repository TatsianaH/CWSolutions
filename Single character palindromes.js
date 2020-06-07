// https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript

function isPalindrome(str){
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

function solve(s){
    if(isPalindrome(s)) return 'OK';
    let arr = s.split('');
    for(let i = 0; i < arr.length; i++){
        let a = [...arr];
        a.splice(i, 1);
        if(isPalindrome(a.join(''))) return 'remove one';
    }
    return 'not possible';
}