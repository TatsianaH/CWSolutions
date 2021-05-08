// https://www.codewars.com/kata/57aa218e72292d98d500240f/train/javascript

function heron(...args) {
    const s = (args[0] + args[1] + args[2]) / 2;
    const formula = Math.sqrt (s * (s - args[0]) * (s - args[1]) * (s - args[2]));
    return formula;
}
