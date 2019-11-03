//https://www.codewars.com/kata/5b203de891c7469b520000b4/train/javascript

  function playerManager(players) {
    if (players === '' || !players) return [];
    const arr = [];
    const arr2 = players.split(',');
    for (let i = 0; i < arr2.length; i = i + 2) {
       arr.push({player: arr2[i].trim(), contact: +arr2[i + 1]});
    }
    return arr;
  }