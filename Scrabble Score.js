// https://www.codewars.com/kata/558fa34727c2d274c10000ae/train/javascript

function scrabbleScore(str){
    let res = 0;
    for(let i = 0; i < str.length; i++){
        let letter = $dict[str[i].toUpperCase()]
        if(letter) res += letter;
    }
    return res;
}