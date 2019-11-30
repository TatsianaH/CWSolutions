// https://www.codewars.com/kata/duck-duck-goose/train/javascript

function duckDuckGoose(p, g) {
    if(g < 10) return p[g - 1].name;
    else if (g % p.length === 0) return p[p.length - 1].name;
    return p[g % p.length - 1].name;
}