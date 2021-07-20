// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

function hasUniqueChars(str){
    const arr = [];
    for(let i = 0; i < str.length; i++){
        if(arr.includes(str[i])) return false;
        else arr.push(str[i]);
    }
    return true;
}
