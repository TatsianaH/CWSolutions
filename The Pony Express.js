// https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9/train/javascript

function riders(s) {
    let rider = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(count < 100) count += s[i];
        else if(count > 100) {
            count = s[i - 1] + s[i];
            rider += 1;
        } else if(count === 100){
            count = s[i];
            rider += 1;
        }
    }
    return count === 0 ? rider : count > 100 ? rider + 2 : rider + 1;
}