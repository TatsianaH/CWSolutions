//https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript

  function getAverageAge(list) {
    let aver = list.map(el => el.age).reduce((acc, curr) => acc + curr, 0) / list.length;
    return Math.round(aver);
  }
