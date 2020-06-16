// https://www.codewars.com/kata/56eff1e64794404a720002d2/train/javascript

function testit(s){
    let count = 0;
    let w = '';
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'w' && w === '') w += s[i];
        if(s[i] === 'o' && w.length === 1) w += s[i];
        if (s[i] === 'r' && w.length === 2) w += s[i];
        if (s[i] === 'd' && w.length === 3) w += s[i];
        if(w === 'word'){
            count++;
            w = '';
        }
    }
    return count;
}