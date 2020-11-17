// https://www.codewars.com/kata/583ade15666df5a64e000058/train/javascript

function evensAndOdds(num){
    if(num % 2 === 0){
        return num.toString(2);
    } else {
        return num.toString(16);
    }
}