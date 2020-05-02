// https://www.codewars.com/kata/5c563cb78dac1951c2d60f01/train/javascript

function passTheDoorMan (word){
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let res = 0;
    for(let i = 0; i < word.length - 1; i++){
        if(word[i] === word[i + 1]) res += (alph.indexOf(word[i + 1]) + 1) * 3;
    }
    return res;
}