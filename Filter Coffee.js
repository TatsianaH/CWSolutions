//https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript


function search(budget, prices) {
  let res  = prices.filter(item => item <= budget).sort((a, b) => a - b);
  return res.join (',');
}