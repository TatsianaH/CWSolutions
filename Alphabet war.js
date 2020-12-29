// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(s){
    const left = {
        'w': 4,
        'p': 3,
        'b': 2,
        's': 1
    };

    const right = {
        'm' : 4,
        'q' : 3,
        'd' : 2,
        'z' : 1
    };

    let l = 0;
    let r = 0;
    for(let i = 0; i < s.length; i++) {
        if (left[s[i]]) l += left[s[i]];
        else if (right[s[i]]) r += right[s[i]];
        else r += 0;
        l += 0;
    }
    return l > r ? 'Left side wins!' : r > l ? 'Right side wins!' : 'Let\'s fight again!';
}