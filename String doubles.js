// https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript

function doubles(s) {
    let res = '';
    for (const l of s) {
        if (res.length != 0 && res[res.length - 1] == l) res = res.slice(0, -1);
        else res += l;
    }
    return res;
}