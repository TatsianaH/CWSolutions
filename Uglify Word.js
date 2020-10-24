// https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929/train/javascript

function uglifyWord(s) {
    let ans = '';
    let flag = true;
    for (let char of s){
        if(flag) ans += char.toUpperCase();
        else ans += char.toLowerCase();

        if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') flag = !flag;
        else flag = true;
    }
    return ans;
}