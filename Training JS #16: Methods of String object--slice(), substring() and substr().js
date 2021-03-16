// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr){
    let min = Math.min(...arr.map(el => el.length));
    return arr.map(el => el.slice(0, min));
}