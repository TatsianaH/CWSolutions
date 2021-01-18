// https://www.codewars.com/kata/5ff6060ed14f4100106d8e6f/train/javascript

function uncensor(n, d) {
    let str = '';
    for(let i = 0; i < n.length; i++){
        if(n[i] === '*') {
            str += d[0];
            d = d.slice(1);
        } else {
            str += n[i];
        }
    }
    return str;
}