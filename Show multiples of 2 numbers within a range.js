// https://www.codewars.com/kata/583989556754d6f4c700018e/train/javascript

function multiples(s1,s2,s3){
    const min = Math.min(s1, s2);
    let arr = [];
    for(let i = min; i < s3; i += min){
        if(i % s1 === 0 && i % s2 === 0) arr.push(i);
    }
    return arr;
}