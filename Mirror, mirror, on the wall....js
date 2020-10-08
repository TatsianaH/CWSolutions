// https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

function mirror(data) {
    const asc = [...data].sort((a, b) => a - b);
    const desc = [...data].sort((a, b) => b - a).slice(1);
    return asc.concat(desc);
}