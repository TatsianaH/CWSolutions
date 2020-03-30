// https://www.codewars.com/kata/567d609f1c16d7369c000008/train/javascript

const generate = length => {
    let num = '';
    for(let i = 0; i < length; i++){
        num += (Math.round(Math.random())) ;
    }
    return num;
};
