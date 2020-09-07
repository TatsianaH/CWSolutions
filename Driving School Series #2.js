// https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/javascript

function cost (mins) {
    let res = 30;
    if(mins > 60) {
        let i = mins - 60;
        while(i > 5){
            i -= 30;
            res += 10;
        }
    }
    return res;
}
