// https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

function hydrate(s) {
    const arr = s.match(/[0-9]/g).reduce((a, b) => +a + +b, 0);
    return arr === 1 ? arr + ' glass of water' : arr + ' glasses of water';
}

