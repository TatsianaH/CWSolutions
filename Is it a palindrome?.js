// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
    x = x.toLowerCase();
    for(let i = 0; i < x.length / 2; i++){
        if(x[i] !== x[x.length - i - 1]) return false;
    }
    return true;
}