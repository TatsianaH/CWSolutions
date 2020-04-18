// https://www.codewars.com/kata/5e96332d18ac870032eb735f/train/javascript

function womensAge(n) {
    let res;
    if(n % 2 === 1){
        res = n + '? That\'s just 21, in base ' + (n - 1)/ 2 + '!';
    } else {
        res = n + '? That\'s just 20, in base ' + n / 2 + '!';
    }
    return res;
}