// https://www.codewars.com/kata/5c511d8877c0070e2c195faf/train/javascript

function validate(u, p){
    if(u === p) return false;
    if(u.length < p.length){
        const half = Math.ceil(u.length / 2);
        for(let i = 0; i < p.length - half; i++){
            let part = p.substring(i, i + half);
            if(u.includes(part)) return false;
        }
        return true;
    } else {
        const half = Math.ceil(p.length / 2);
        for(let i = 0; i < u.length - half; i++){
            let part = u.substring(i, i + half);
            if(p.includes(part)) return false;
        }
        return true;
    }
}