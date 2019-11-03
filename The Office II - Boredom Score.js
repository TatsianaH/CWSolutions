//https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

  function boredom(staff){
    const boredomScore = {
      accounts: 1,
      finance: 2,
      canteen: 10,
      regulation: 3,
      trading: 6,
      change: 6,
      IS: 8,
      retail: 5,
      cleaning: 4,
      'pissing about': 25,
    }
    let res = Object.values(staff).map(el => boredomScore[el]).reduce((acc, curr) => acc + curr, 0);
    if(res <= 80) {
      return 'kill me now';
    } else if (res < 100){
      return 'i can handle this';
    } else {
    return 'party time!!';
    }
  }