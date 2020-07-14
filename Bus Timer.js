// https://www.codewars.com/kata/5736378e3f3dfd5a820000cb/train/javascript

function busTimer(time) {
    let min = 6 * 60 - 5; // 355
    let max = 24 * 60 - 5; // 1435
    time = time.split(':');
    time = parseInt(time[0]) * 60 + parseInt(time[1]);
    if (time < min) return min - time;
    else if (time > max) return max - time + 360;
    else return (15 - (time + 5) % 15) % 15;
}