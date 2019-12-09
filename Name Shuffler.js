// https://www.codewars.com/kata/name-shuffler/train/javascript

function nameShuffler(str){
    let arr = str.split(' ');
    [arr[0], arr[1]] = [arr[1], arr[0]];
    return arr.join(' ');
}