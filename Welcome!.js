//https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

function greet(language) {
  let keys = Object.keys(dataBase);
  if(keys.includes(language)){
    return dataBase[language];
  } else{
    return dataBase.english;
  }
}

  const dataBase = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  };
