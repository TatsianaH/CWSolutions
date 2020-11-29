// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/train/javascript

function lifePathNumber(dob) {
    dob = dob.replace(/-/g, '').split('').map(el => +el).reduce((a, b) => a + b, 0);
    while(dob > 9){
        dob = dob.toString().split('').map(el => +el).reduce((a, b) => a + b, 0);
    }
    return dob;
}