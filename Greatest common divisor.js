// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript

function mygcd(x,y){
    let max = Math.min(x, y);
    while(max > 0){
        if(x % max === 0 && y % max === 0){
            return max
        } else {
            max--;
        }
    }
}
