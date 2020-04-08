// https://www.codewars.com/kata/whos-online/train/javascript

const whosOnline = (friends) => {
  const obj = {};
  if(friends.length === 0) {
    return obj;
  }
  let arrOnline = [];
  let arrOffline= [];
  let arrAway = [];
  for(let i = 0; i < friends.length; i++){
    if(friends[i].status === 'online' && friends[i].lastActivity <= 10){
      arrOnline.push(friends[i].username);
      obj.online = arrOnline;
    }
    if(friends[i].status === 'offline'){
      arrOffline.push(friends[i].username);
      obj.offline = arrOffline;
    }
    if(friends[i].status === 'online' && friends[i].lastActivity > 10){
      arrAway.push(friends[i].username);
      obj.away = arrAway;
    }
  }
  return obj;
}