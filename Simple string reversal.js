// https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript

function solve(str){
    const arr = [...str.split(' ').join('')];
    return str.replace(/\S/g, a => arr.pop());
}

// 2 case

function solve(str){
    let s = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') s += str[i];
        if (str[s.length] === ' ') s += str[s.length];
    }
    return s;
}