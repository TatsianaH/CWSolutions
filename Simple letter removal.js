// https://www.codewars.com/kata/5b728f801db5cec7320000c7/train/javascript

function solve(s, k){
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < alph.length; i++){
        while(s.includes(alph[i]) && k > 0){
            s = s.replace(alph[i], '');
            k--;
        }
    }
    return s;
}
