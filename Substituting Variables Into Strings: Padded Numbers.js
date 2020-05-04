// https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

function solution(value){
    const valueLength = value.toString().length;
    let num = '';
    for(let i = 1; i <= 5 - valueLength; i++){
        num += 0;
    }
    num += value;
    return `Value is ${num}`;
}