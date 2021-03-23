// https://www.codewars.com/kata/5630d1747935943168000013/train/javascript

const scoreToTally = function(score){
    let res = '';
    while(score > 0){
        if(score >= 5){
            res += 'e <br>';
            score -= 5;
        } else if(score >= 4){
            res += 'd';
            score -= 4;
        } else if(score >= 3){
            res += 'c';
            score -= 3;
        } else if(score >= 2){
            res += 'b';
            score -= 2;
        } else if(score >= 1){
            res += 'a';
            score -= 1;
        }
    }
    return res;
}

// 2 variant

const scoreToTally = function(score){
    let letters = 'abcde';
    let fives = Math.trunc(score / 5);
    let rest = score % 5;
    return "e <br>".repeat(fives) + (rest > 0 ? letters[rest-1] : "");
}