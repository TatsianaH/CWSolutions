// https://www.codewars.com/kata/5630d1747935943168000013/train/javascript

const scoreToTally = function(score){
    let res = '';
    const letters = ['', 'a','b', 'c', 'd', 'e'];
    while(score >= 5){
        res += 'e <br>';
        score -= 5;
    }
    return res + letters[score];
}

// 2 variant

const scoreToTally = function(score){
    let letters = 'abcde';
    let fives = Math.trunc(score / 5);
    let rest = score % 5;
    return "e <br>".repeat(fives) + (rest > 0 ? letters[rest-1] : "");
}