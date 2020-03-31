// https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript

function absentVowel(x){
    if(!x.includes('a')) return 0;
    if(!x.includes('e')) return 1;
    if(!x.includes('i')) return 2;
    if(!x.includes('o')) return 3;
    if(!x.includes('u')) return 4;
}

// 2nd case

function absentVowel(x){
    x = x.toLowerCase();
    const vowels = 'aeiou';
    for(let i = 0; i < vowels.length; i++){
        if(x.indexOf(vowels[i]) == -1) return i;
    }
}