// https://www.codewars.com/kata/599db0a227ca9f294b0000c8/train/javascript

function testResult(arr) {
    const avr = +(arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(3);
    const obj = {
        h: 0,
        a: 0,
        l: 0,
    };
    for(let i = 0; i < arr.length; i++){
        if([9, 10].includes(arr[i])) obj.h += 1;
        else if([7, 8].includes(arr[i])) obj.a += 1;
        else obj.l += 1;
    }
    return obj.a === 0 && obj.l === 0 ? [avr, obj, 'They did well'] : [avr, obj];
}
