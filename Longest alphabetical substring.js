// https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

function longest(str) {
    let longestSub = "";
    let length = 0;
    let start = 0;
    let prev = str[0];
    for (let i = 1; i <= str.length; i++) {
        if(i === str.length || str[i] < prev) {
            if(length < i - start) {
                longestSub = str.substring(start, i);
                length = i - start;
            }
            start = i;
        }
        prev = str[i];
    };
    return longestSub;

}