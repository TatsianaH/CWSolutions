function bookPartition(m, p, c) {
  let res = 0;
  let mM = (m - (m % 3)) / 3;// amount of m group
  let pP =(p - (p % 3)) / 3;// amount of p group
  let cC = (c - (c % 3)) / 3;// amount of c group
  let our = m % 3 + p % 3 + c % 3;
  let our2 =  (our - (our % 3)) / 3;
  if(our <= 3){
    if(m % 3 === 0 || p % 3 === 0 || c % 3 === 0){
      return res = mM + pP + cC;
    } else {
      return res = mM + pP + cC + our2;
    }
  } else {
    return res = mM + pP + cC + our2;
  }
}