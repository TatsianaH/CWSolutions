// https://www.codewars.com/kata/the-office-i-outed/train/javascript

function outed(meet, boss){
let sum = 0;
let length = 0;
for (let key in meet){
  if(key === boss){
    sum += meet[key] * 2;
  } else {
    sum += meet[key];
  }
    length++;
  }
  return (sum/length <= 5) ? 'Get Out Now!' : 'Nice Work Champ!';
}