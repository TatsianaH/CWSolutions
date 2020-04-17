//https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript

var number = function(busStops) {
  let getIn = 0;
  let getOff = 0;
  for (let i = 0; i < busStops.length; i++) {
    getIn += busStops[i][0];
    getOff += busStops[i][1];
  }
  return getIn - getOff;
};

// 2 case

var number = function(busStops){
  return busStops.reduce((acc,[a,b])=> (acc + a - b), 0)
}