// https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript

function cookingTime(eggs) {
    let min = Math.floor(eggs / 8) * 5;
    if(eggs % 8 !== 0) min += 5
    return min;
}

// 2 variant

function cookingTime(eggs) {
    let min = 0;
    for(let i = 0; i < eggs; i += 8){
        min += 5;
    }
    return min;
}