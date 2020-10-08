// https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

function mirror(data) {
    let asc = [...data].sort((a, b) => a - b);
    let desc = [...data].sort((a, b) => b - a).slice(1);
    return asc.concat(desc);
}