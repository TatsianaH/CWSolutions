// https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript

function top3(prod, a, pr) {
    let obj = {};
    for(let i = 0; i < prod.length; i++){
        obj[prod[i]] = a[i] * pr[i]
    }
    const arr = Object.entries(obj)
        .sort((a, b, i) => b[1] - a[1])
        .map((el, i) => el[0]);
    return arr.slice(0, 3);
}