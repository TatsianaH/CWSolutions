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


// 2 case

function womensAge(n) {
    return `${n}? That's just ${20 + n % 2}, in base ${Math.floor(n / 2)}!`
}