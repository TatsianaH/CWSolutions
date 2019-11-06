//https://www.codewars.com/kata/simple-fun-number-152-invite-more-women/train/javascript

function inviteMoreWomen(L) {
  let woman = L.filter(el => el === -1).length;
  return woman < L.length/2;
}