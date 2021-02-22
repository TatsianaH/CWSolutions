// https://www.codewars.com/kata/5f5daf1a209a64001183af9b/train/javascript

function makeChocolates(s, b, g) {
    if (g / (b * 5) === 1) return 0;
    else {
        for (let i = b; i >= 0; i--) {
            if((g - i * 5) % 2 === 0){
                for (let j = 0; j <= s; j++) {
                    if(i * 5 + j * 2 === g) return j;
                }
            }
        }
        return -1
    }
}