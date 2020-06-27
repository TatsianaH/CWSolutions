// https://www.codewars.com/kata/if-you-can-read-this-dot-dot-dot/train/javascript

function to_nato(words) {
    const obj = {
        "A": "Alfa",
        "B": "Bravo",
        "C": "Charlie",
        "D": "Delta",
        "E": "Echo",
        "F": "Foxtrot",
        "G": "Golf",
        "H": "Hotel",
        "I": "India",
        "J": "Juliett",
        "K": "Kilo",
        "L": "Lima",
        "M": "Mike",
        "N": "November",
        "O": "Oscar",
        "P": "Papa",
        "Q": "Quebec",
        "R": "Romeo",
        "S": "Sierra",
        "T": "Tango",
        "U": "Uniform",
        "V": "Victor",
        "W": "Whiskey",
        "X": "Xray",
        "Y": "Yankee",
        "Z": "Zulu",
        '.': '.',
        '!': '!',
        '?': '?',
        ' ' : ' '
    }
    let arr = words.toUpperCase().split('').map(el => el = obj[el]);
    return arr.join(' ').replace(/\s+/g, ' ');
}