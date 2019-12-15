//https://www.codewars.com/kata/be-concise-i-the-ternary-operator/train/javascript

function describeAge(a) {
    let w='You\'re a(n) ';
    return a<=12?w+'kid':a<=17?w+'teenager':a<=64?w+'adult':w+'elderly';
}