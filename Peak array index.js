// https://www.codewars.com/kata/5a61a846cadebf9738000076/train/javascript

function peak(arr){
    for(let i = 1; i < arr.length; i++){
        const part1 = arr.slice(0, i).reduce((a, b) => a + b, 0);
        const part2 = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        if(part1 === part2) return i;
    }
    return -1;
}