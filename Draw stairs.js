// https://www.codewars.com/kata/draw-stairs/train/javascript

function drawStairs(n) {
    let s = '';
    for(let i = 1; i < n; i++){
        s += 'I\n';
        s += ' '.repeat(i);
    }
    s += 'I';
    return s;
}