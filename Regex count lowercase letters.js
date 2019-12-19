// https://www.codewars.com/kata/regex-count-lowercase-letters/train/javascript

function lowercaseCount(str){
    return !str.match(/[a-z]/g) ? 0 : str.match(/[a-z]/g).length;
}