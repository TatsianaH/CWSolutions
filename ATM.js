// https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

function solve(n) {
    const n500 = Math.trunc(n / 500);
    const n200 = Math.trunc((n % 500) / 200);
    const n100 = Math.trunc((n % 500 % 200) / 100);
    const n50 = Math.trunc((n % 500 % 200 % 100) / 50);
    const n20 = Math.trunc((n % 500 % 200 % 100 % 50) / 20);
    const n10 = Math.trunc((n % 500 % 200 % 100 % 50 % 20) / 10);
    const res = n500 * 500 + n200 * 200 + n100 * 100 + n50 * 50 + n20 * 20 + n10 * 10;
    if(res === n) {
        const count = n500 + n200 + n100 + n50 + n20 + n10;
        return count;
    } else {
        return -1;
    }
}