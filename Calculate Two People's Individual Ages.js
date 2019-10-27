//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript

function getAges(sum,diff){
  if(sum <= 0 || diff <= 0)
    return null;
  let smallAge = (sum - diff)/2;
  let olderAge = sum - smallAge;
  if(smallAge < 0 || olderAge < 0) {
    return null;
  }
  return [olderAge, smallAge];
};