//https://www.codewars.com/kata/find-the-divisors/train/javascript

function divisors(integer) {
const list = [];
  for(let i = 2; i < integer; i++){
    if(integer % i === 0) {
      list.push(i);
    }
  }
  return (list[0] !== undefined) ? list : integer + ' is prime';;
};

// 2 case

function divisors(integer) {
  const divisors = [];
  for(let i = 2; i <= integer / 2; i++){
    if(integer % i === 0) divisors.push(i);
  }
  return divisors.length > 0 ? divisors : `${integer} is prime`;
};