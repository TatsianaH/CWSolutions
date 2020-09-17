// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

function dup(s) {
    const arr = [];
    for(let i = 0; i < s.length; i++){
        let word = s[i][0];
        for(let j = 1; j < s[i].length; j++){
            if(s[i][j] !== word[word.length - 1]){
                word += s[i][j];
            }
            continue;
        }
        arr.push(word);
    }
    return arr;
};

// 2 case

function dup(s) {
    return s.map(w => {
        return w.split('').filter((c, i, arr) => {
            return c !== arr[i - 1];
        }).join('');
    });
};