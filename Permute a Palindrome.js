// https://www.codewars.com/kata/permute-a-palindrome/train/javascript

function permuteAPalindrome (s) {
    let obj = {};
    let odd = 0;
    for(let i = 0; i < s.length; i++){
        if(!obj[s[i]]) obj[s[i]] = 1;
        else obj[s[i]]++;
    }
    for(let key in obj){
        if(obj[key] % 2) odd++;
    }
    return odd <= 1;
}
