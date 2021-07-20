// https://www.codewars.com/kata/58ce8725c835848ad6000007/train/javascript

function potatoes(p0, w0, p1) {
    const dryMatterial = (100 - p0) * w0;
    const w1 = dryMatterial / (100 - p1);
    return Math.trunc(w1);
}
