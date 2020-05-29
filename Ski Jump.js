// https://www.codewars.com/kata/57ed7214f670e99f7a000c73/train/javascript

function skiJump(m){
    const h = m.length;
    const s = h * 1.5;
    const l = (h * s * 9 / 10).toFixed(2);
    if(l < 10) return l + ' metres: He\'s crap!';
    else if(l >= 10 && l < 25) return l + ' metres: He\'s ok!';
    else if(l >= 25 && l < 50) return l + ' metres: He\'s flying!';
    else return l + ' metres: Gold!!';
}