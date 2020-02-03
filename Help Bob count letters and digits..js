//https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript

function countLettersAndDigits(input) {
    let count = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i].match(/[a-zA-Z0-9]/)) count++;
    }
    return count;
}


// 2 case

function countLettersAndDigits(inp) {
    let res = inp.match(/[a-zA-Z0-9]/g);
    return res !== null ? res.length : 0;
}