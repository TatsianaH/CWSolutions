//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

  function match(candidate, job) {
    if(candidate.minSalary === undefined || job.maxSalary === undefined){
      throw 'Error';
    }
    if((candidate.minSalary - candidate.minSalary * 10 / 100 ) <= job.maxSalary){
      return true;
    } else {
      return false;
    }
  }