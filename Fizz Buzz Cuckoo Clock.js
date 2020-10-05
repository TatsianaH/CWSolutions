// https://www.codewars.com/kata/58485a43d750d23bad0000e6/train/javascript

function fizzBuzzCuckooClock(time) {
    time = time.split(':');
    if(time[1] === '00'){
        if(time[0] > 12) time[0] = time[0] - 12;
        if(time[0] === '00') time[0] = '12';
        return 'Cuckoo '.repeat(+time[0]).trimRight();
    }
    else if(time[1] % 30 === 0) return 'Cuckoo';
    else if(time[1] % 15 === 0) return 'Fizz Buzz';
    else if(time[1] % 3 === 0) return 'Fizz';
    else if(time[1] % 5 === 0) return 'Buzz';
    else return 'tick';
}
