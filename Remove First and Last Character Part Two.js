// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(arr){
    let start = arr.indexOf(',');
    let end = arr.lastIndexOf(',');
    let str = arr.slice(start + 1, end + 1);
    return str.includes(',') ? str.replace(/\,/g, ' ').trim() : null;
}
