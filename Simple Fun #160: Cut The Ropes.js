// https://www.codewars.com/kata/58ad388555bf4c80e800001e/train/javascript

function cutTheRopes(a) {
    let res = [a.length];
    while(Math.max(...a) !== 0){
        a = a.sort((a, b) => a - b);
        const min = a.find(el => el !== 0);
        if(min){
            a = a.map(rope => rope - min > 0 ? rope - min : 0);
            const count = a.filter(el => el !== 0).length;
            if(count) res.push(count);
        }
    }
    return res;
}
