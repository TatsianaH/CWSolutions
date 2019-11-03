//https://www.codewars.com/kata/dubstep/train/javascript

  function songDecoder(song){
    return song.replace(/WUB/g, ' ').replace(/\s+/g, ' ').trim();
  }