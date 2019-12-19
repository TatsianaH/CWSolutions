// https://www.codewars.com/kata/numbers-to-letters/train/javascript

function switcher(x){
    let str = '';
    const arr = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a", "!", "?", " "];
    for(let i = 0; i < x.length; i++){
        str += arr[x[i] - 1];
    }
    return str;
}