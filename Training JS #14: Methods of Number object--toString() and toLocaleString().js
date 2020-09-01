// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r,g,b){
    r = r.toString(16).length === 2 ? r.toString(16) : '0' + r.toString(16);
    g = g.toString(16).length === 2 ? g.toString(16) : '0' + g.toString(16);
    b = b.toString(16).length === 2 ? b.toString(16) : '0' + b.toString(16);
    return '#' + r + g + b;
}
