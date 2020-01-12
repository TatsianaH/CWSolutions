// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

function expressionMatter(a, b, c) {
    let arr = [];
    arr[0] = a * (b + c);
    arr[1] = a * b * c;
    arr[2] = a + b * c;
    arr[3] = (a + b) * c;
    arr[4] = a * b + c;
    arr[5] = a + b + c;
    return Math.max(...arr);
}

// 2 case

function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c,
    );
}