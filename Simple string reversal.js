// https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript

function solve(str){
    const arr = [...str.split(' ').join('')];
    return str.replace(/\S/g, a => arr.pop());
}