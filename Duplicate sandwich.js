// https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/train/javascript

function duplicateSandwich(a) {
    if(typeof a === 'string'){
        a = a.split('');
        const el1= a.filter(el => a.indexOf(el) !== a.lastIndexOf(el))[0];
        const ind1 = a.indexOf(el1);
        const ind2 = a.lastIndexOf(el1);
        return a.slice(ind1 + 1, ind2).join('');
    }
    const el1= a.filter(el => a.indexOf(el) !== a.lastIndexOf(el))[0];
    const ind1 = a.indexOf(el1);
    const ind2 = a.lastIndexOf(el1);
    return a.slice(ind1 + 1, ind2);
}