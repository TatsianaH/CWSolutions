// https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript

function isPalindrome(line) {
    if(typeof line !== 'string') line = line.toString();
    line = line.toLowerCase().replace(/ /g, '');
    for(let i = 0; i < line.length / 2; i++){
        if(line[i] !== line[line.length - 1 - i]) return false;
    }
    return true;
}