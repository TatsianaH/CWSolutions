// https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript

function findScreenHeight(width, ratio) {
    const num = ratio.split(':');
    const height = width / num[0] * num[1];
    return `${width}x${height}`;
}