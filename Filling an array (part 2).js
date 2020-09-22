// https://www.codewars.com/kata/571e9af407363dbf5700067c/train/javascript

const squares = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i ** 2);
    }
    return arr;
};

const range = (n, start, step) => {
    let arr = [];
    let i = 0;
    while (i < n) {
        arr.push(start);
        start += step;
        i++;
    }
    return arr;
};

const random = (n, min, max) => {
    console.log(n, min, max)
    let arr = [];
    while (n > 0) {
        arr.push(Math.round(Math.random() * (max - min) + min));
        n--;
    }
    return arr;
};

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primes = n => {
    const arr = [];
    let i = 2;
    while (arr.length < n) {
        if (isPrime(i) === true) arr.push(i);
        i++;
    }
    return arr;
};