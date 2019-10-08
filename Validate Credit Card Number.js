//https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript

  function validate(n) {
    let card = n.toString().split('').map(el => +el);
    if (card.length % 2 === 0) {
      for (let i = 0; i < card.length; i = i + 2) {
        card[i] = card[i] * 2;
        if (card[i] > 9) {
          card[i] = card[i] - 9;
        }
      }
    }
    if (card.length % 2 === 1) {
      for (let i = 1; i < card.length; i = i + 2) {
        card[i] = card[i] * 2;
        if (card[i] > 9) {
          card[i] = card[i] - 9;
        }
      }
    }
    let res = card.reduce((a, b) => a + b, 0);
    return res % 10 === 0;
  }