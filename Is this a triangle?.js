// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a,b,c){
    if(a + b > c && a + c > b && b + c > a){
        return true;
    }
    return false;
}