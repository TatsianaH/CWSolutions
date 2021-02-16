// https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript

function cutCube(volume,n){
    if(Number.isInteger(Math.cbrt(n))){
        return Number.isInteger(Math.cbrt(volume / n));
    }
    return false;
}