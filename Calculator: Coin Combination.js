// https://www.codewars.com/kata/564d0490e96393fc5c000029/train/javascript

const coinCombo = function(cents) {
    let coins = [];
    coins[3] = Math.trunc(cents / 25);
    coins[2] = Math.trunc((cents % 25) / 10);
    coins[1] = Math.trunc((cents - coins[3] * 25 - coins[2] * 10) /5);
    coins[0] = cents - coins[3] * 25 - coins[2] * 10 - coins[1] * 5;
    return coins;
}