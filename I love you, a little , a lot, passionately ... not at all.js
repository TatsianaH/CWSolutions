// https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all/train/javascript

function howMuchILoveYou(n) {
    const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return n % 6 ? arr[(n % 6) - 1] : arr[5];
}

// 2 case

function howMuchILoveYou(petals) {
    const phrases = ['not at all','I love you', 'a little', 'a lot', 'passionately', 'madly'];
    return phrases[petals % 6];
}
