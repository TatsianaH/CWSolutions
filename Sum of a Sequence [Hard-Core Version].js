// https://www.codewars.com/kata/sum-of-a-sequence-hard-core-version/train/javascript

const sequenceSum = (begin, end, step) => {
    if((begin < end && step <= 0) || (begin > end && step >= 0)) return 0;
    let n = Math.floor((end - begin + step)/step);// amount of numbers in progression
    return n * (2 * begin + (n - 1) * step) / 2;// formula of arithmetic progression
};