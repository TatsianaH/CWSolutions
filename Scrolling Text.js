// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript

function scrollingText(text){
    text = text.toUpperCase();
    let arr = [];
    for(let i = 0; i < text.length; i++){
        arr.push(text.slice(i) + text.slice(0, i));
    }
    return arr;
}