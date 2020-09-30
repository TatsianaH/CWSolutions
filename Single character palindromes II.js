// https://www.codewars.com/kata/5a66ea69e6be38219f000110/train/javascript

function solve(str){
    let count = 0;
    let i = 0;
    while(i < str.length / 2){
        if(str[i] !== str[str.length - 1 - i]) {
            count++;
        }
        i++;
    }
    if(count === 0 && str.length % 2 === 1) return true;
    return count === 1 ? true : false;
}