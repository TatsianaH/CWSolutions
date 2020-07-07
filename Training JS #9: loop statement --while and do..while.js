// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str,n){
    while(n > 0){
        if(n % 2 === 1){
            str = '*' + str;
        } else {
            str += '*';
        }
        n--;
    }
    return str;
}