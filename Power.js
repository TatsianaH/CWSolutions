// https://www.codewars.com/kata/power/train/javascript

function numberToPower(number, power){
    if(power === 0) return 1;
    let res = 1;
    let i = 1;
    do{
        res *= number;
        i++;
    } while(i <= power )
    return res;
}