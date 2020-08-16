// https://www.codewars.com/kata/5ebd53ea50d0680031190b96/train/javascript

const getTurkishNumber = (num) => {
    const digits = {
        0: 'sıfır',
        1: 'bir',
        2: 'iki',
        3: 'üç',
        4: 'dört',
        5: 'beş',
        6: 'altı',
        7: 'yedi',
        8: 'sekiz',
        9: 'dokuz',
    };
    const dozens = {
        10: 'on',
        20: 'yirmi',
        30: 'otuz',
        40: 'kırk',
        50: 'elli',
        60: 'altmış',
        70: 'yetmiş',
        80: 'seksen',
        90: 'doksan',
    };
    if(num <= 9){
        return digits[num];
    } else if (num % 10 === 0){
        return dozens[num];
    } else {
        const num2 = num%10;
        const num1 = num - num2;
        return dozens[num1] + ' '+ digits[num2];
    }
}