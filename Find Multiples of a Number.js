// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(int, l) {
    let arr = [];
    for(let i = int; i <= l; i += int){
        arr.push(i);
    }
    return arr;
}