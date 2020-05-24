// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

function between(a, b) {
    let res = [];
    while(a <= b){
        res.push(a);
        a++;
    }
    return res;
}