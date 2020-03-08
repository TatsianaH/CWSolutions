// https://www.codewars.com/kata/5913152be0b295cf99000001/train/javascript

const divisions = (n, divisor) => {
    let count = 0;
    if (n / divisor < 1) return 0;
    while(n > 1 && n / divisor >= 1){
        let rem = n % divisor;
        if(rem !== 0){
            n = (n - rem) / divisor;
        } else {
            n = n / divisor;
        }
        count++;
    }
    return count;
};