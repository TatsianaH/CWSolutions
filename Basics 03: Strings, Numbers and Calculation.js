// https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/javascript

function calculateString(st){
    const s = st.replace(/[^0-9/+.*-]/g, '');
    let res = 0;
    let num1 = '';
    let num2 = '';
    let sym = '';
    for(let i = 0; i < s.length; i++){
        if(!Number.isNaN(+s[i]) || s[i] === '.'){
            num1 += s[i];
        } else {
            sym = s[i];
            num2 = s.slice(i + 1);
            break;
        }
    }
    switch(sym){
        case '*': res = +num1 * +num2; break;
        case '+': res = +num1 + +num2; break;
        case '-': res = +num1 - +num2; break;
        case '/': res = num1 / num2; break;
    }
    return Math.round(res).toString();
}