// https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript

function countAdjacentPairs(str) {
    if(str.length <= 1) return 0;
    str = str.toLowerCase().replace(/\s+/g, ' ').split(' ');
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i + 1] && str[i] !== str[i + 2]){
            count++;
            i += 2;
        } else if(str[i] === str[i - 1] && str[i] !== str[i + 1]){
            count++;
        }
    }
    return count;
}