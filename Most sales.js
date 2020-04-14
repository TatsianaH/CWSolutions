// https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript

function top3(prod, a, pr) {
    let arr = [];
    for(let i = 0; i < prod.length; i++){
        arr.push({prod: prod[i], sum: a[i] * pr[i]});
    }
    const res = arr.sort((a, b) => b.sum - a.sum || prod.indexOf(a.prod) - prod.indexOf(b.prod))
        .map(el => el.prod);
    return res.slice(0, 3);
}