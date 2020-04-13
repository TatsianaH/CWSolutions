// https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

function hydrate(s) {
    const arr = s.match(/[0-9]/g).reduce((a, b) => +a + +b, 0);
    return arr === 1 ? arr + ' glass of water' : arr + ' glasses of water';
}


// 2 case

function hydrate(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (parseInt(s[i]) > 0) {
            answer += +s[i];
        }
    }
    return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
}

