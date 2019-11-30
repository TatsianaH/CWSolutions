// https://www.codewars.com/kata/removing-elements/train/javascript

function removeEveryOther(arr){
    return arr.filter((el, i) => i % 2 === 0);
}