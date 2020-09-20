// https://www.codewars.com/kata/56f253dd75e340ff670002ac/train/javascript

function compose(s1, s2) {
    s1 = s1.split('\n');
    s2 = s2.split('\n');
    let res = '';
    for(let i = 0; i < s1.length; i++){
        const s1Part = s1[i].slice(0, i + 1);
        const s2Part = s2[s2.length - i - 1].slice(0, s2[i].length - i);
        if(i === s1.length - 1) res +=  s1Part + s2Part;
        else res +=  s1Part + s2Part + '\n';
    }
    return res;
}