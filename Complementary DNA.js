//https://www.codewars.com/kata/complementary-dna/train/javascript

  function DNAStrand(dna){
     let obj = {
       'A': 'T',
       'T': 'A',
       'C': 'G',
       'G': 'C'
     };
     return dna.split('').map(el => obj[el]).join('');
  }
