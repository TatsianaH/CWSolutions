// https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript

function sabb(s, val, h){
    let count = 0;
    let lCount = 0;
    for(let i = 0; i < s.length; i++){
        if('sabbatical'.includes(s[i])) count++;
        else if(s[i] === 'l') lCount++;
    }
    if(lCount >= 3) count += 3;
    return count + val + h > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
}