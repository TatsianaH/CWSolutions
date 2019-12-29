// https://www.codewars.com/kata/58df2d65808fbcdfc800004a/train/javascript

function proteinSynthesis(dna) {
    let obj = {
        'Ala':['GCU', 'GCC', 'GCA', 'GCG'],
        'Leu': ['UUA', 'UUG', 'CUU', 'CUC', 'CUA', 'CUG'],
        'Arg': ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG'],
        'Lys': ['AAA', 'AAG'],
        'Asn': ['AAU', 'AAC'],
        'Met': ['AUG'],
        'Asp': ['GAU', 'GAC'],
        'Phe': ['UUU', 'UUC'],
        'Cys': ['UGU', 'UGC'],
        'Pro': ['CCU', 'CCC', 'CCA', 'CCG'],
        'Gln': ['CAA', 'CAG'],
        'Ser': ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'],
        'Glu': ['GAA', 'GAG'],
        'Thr': ['ACU', 'ACC', 'ACA', 'ACG'],
        'Gly': ['GGU', 'GGC', 'GGA', 'GGG'],
        'Trp': ['UGG'],
        'His': ['CAU', 'CAC'],
        'Tyr': ['UAU', 'UAC'],
        'Ile': ['AUU', 'AUC', 'AUA'],
        'Val': ['GUU', 'GUC', 'GUA', 'GUG'],
        'Stop':[ 'UAG', 'UGA', 'UAA']
    };
    dna = dna.replace(/A/g, 'U').replace(/G/g, 'c').replace(/C/g, 'G').replace(/T/g, 'A').toUpperCase();
    let rna = '';
    for(let i = 0; i < dna.length; i += 3){
        let f = dna.length % 3;
        if (i === dna.length - f && f === 2){
            rna +=dna[i] + dna[i + 1];
        } else if (i === dna.length - f && f === 1){
            rna +=dna[i];
        } else {
            rna +=dna[i] + dna[i + 1] + dna[i + 2] + ' ';
        }
    }
    rna = rna.trimRight();
    let protein = '';
    rna = rna.split(' ');
    for(let i = 0; i < rna.length; i++){
        for(let key in obj){
            if(obj[key].includes(rna[i])) protein += key + ' ';
        }
    }
    protein = protein.trimRight();
    return [rna.join(' '), protein];
}