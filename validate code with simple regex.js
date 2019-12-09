// https://www.codewars.com/kata/validate-code-with-simple-regex/train/javascript

function validateCode (code) {
    code = code.toString();
    if(code.startsWith('1') ||code.startsWith('2') || code.startsWith('3')) return true;
    return false;
}