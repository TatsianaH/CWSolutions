// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(q) {
    q.reverse();
    let i = q.indexOf('wolf');
    if(i === 0) return "Pls go away and stop eating my sheep";
    else return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
}