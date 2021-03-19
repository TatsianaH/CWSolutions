// https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/train/javascript

function getDay(day, isLeap){
    const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = [31, 28 + isLeap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(let i = 0; i < d.length; i++){
        if(day <= d[i]) return `${m[i]}, ${day}`;
        else day -= d[i];
    }
}