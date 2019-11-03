//https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript

function bingo(a) {
 let alph = '0abcdefghijklmnopqrstuvwxyz';
 let res = '';
 for(let i = 0; i < a.length; i++){
  res += alph[a[i]];
}
   if(res.includes('b')
     && res.includes('i')
     && res.includes('n')
     && res.includes('g')
     && res.includes('o')){
    return 'WIN';
   } else {
    return 'LOSE';
   }
}