//https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript

function growingPlant(upSpeed, downSpeed, dH) {
    let res = upSpeed;
    let days = 0;
    for(let i = 0; i < dH; i = upSpeed){
        res += i;
        days++;
        if(res >= dH) return days;
        res -= downSpeed;
    }
    return days;
}