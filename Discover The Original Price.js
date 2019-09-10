//https://www.codewars.com/kata/discover-the-original-price/train/javascript

function discoverOriginalPrice(discountedPrice, salePercentage){
  let res = +(discountedPrice * 100 / (100 - salePercentage)).toFixed(2);
  return res;
}