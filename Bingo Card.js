//https://www.codewars.com/kata/bingo-card/train/javascript

function getCard(){
  let card = [];
  while (card.length < 5){
    let line = 'B' + (Math.floor(Math.random() * 15) + 1).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  while (card.length < 10){
    let line = 'I' + (Math.floor(Math.random() * 15) + 16).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  while (card.length < 14){
    let line = 'N' + (Math.floor(Math.random() * 15) + 31).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  while (card.length < 19){
    let line = 'G' + (Math.floor(Math.random() * 15) + 46).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  while (card.length < 24){
    let line = 'O' + (Math.floor(Math.random() * 15) + 61).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  return card;
}