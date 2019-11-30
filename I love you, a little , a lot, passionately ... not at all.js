// https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all/train/javascript

function howMuchILoveYou(n) {
    const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for(let i = 1; i <= n; i++){
        if(n === i || n % (i + 6) === 0) return arr[i - 1];
    }
}
