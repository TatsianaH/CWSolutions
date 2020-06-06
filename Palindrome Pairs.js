// https://www.codewars.com/kata/5772ded6914da62b4b0000f8/train/javascript

function isPalindrome(s){
    for(let i = 0; i < s.length / 2; i++){
        if(s[i] !== s[s.length - i - 1]) return false;
    }
    return true;
}

const palindromePairs = words => {
    let arr = [];
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words.length; j++){
            if(i !== j){
                let word = words[i].toString() + words[j].toString();
                if(isPalindrome(word)){
                    arr.push([i, j]);
                }
            }
        }
    }
    return arr;
}