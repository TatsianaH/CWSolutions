//https://www.codewars.com/kata/8-inch-pizza-equivalence/train/javascript

function howManyPizzas(n){
  let square8 =  2 * Math.PI * 16;
  let slice = Math.trunc(square8 / 8);
  let square = 2 * Math.PI * ((n / 2) ** 2);
  let resPiz = Math.trunc(square/square8);
  let resSlice = Math.round((square - resPiz * square8)/slice);
  return `pizzas: ${resPiz}, slices: ${resSlice}`;
}