// https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

function fuelPrice(l, p) {
    let cost = 0;
    if(l >= 2 && l < 4) cost = l * (p - 0.05);
    if(l >= 4 && l < 6) cost = l * (p - 0.10);
    if(l >= 6 && l < 8) cost = l * (p - 0.15);
    if(l >= 8 && l < 10) cost = l * (p - 0.20);
    if(l >= 10) cost = l * (p - 0.25);
    return +cost.toFixed(2);
}

// 2 case

function fuelPrice(l, p) {
    for(let i = 2; i <= 10; i += 2){
        if(i <= l){
            p -= 0.05;
        }
    }
    return +(l * p).toFixed(2);
}