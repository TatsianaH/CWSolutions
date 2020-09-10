// codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

function maxDiff(list) {
    if(list.length === 0) return 0;
    list.sort((a, b) => a - b, 0);
    return list[list.length - 1] - list[0];
};