// https://www.codewars.com/kata/564f458b4d75e24fc9000041/train/javascript

const remainder = (D, d) => {
    const n = Math.trunc(D / d);
    return D - (n * d);
};