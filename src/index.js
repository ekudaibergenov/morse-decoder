const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeChar(char) {
    if (char === '**********') return " ";

    let i = 0
    while (char[i] !== "1") {
        i += 1
    }
    let key = ""
    for (let idx = i; idx < char.length; idx += 2) {
        if (char.slice(idx, idx+2) === "10") {
            key += "."
        }
        else {
            key += "-"
        }
    }

    return MORSE_TABLE[key]
}

function decode(expr) {
    let res = ""
    for (let i = 0; i < expr.length; i += 10) {
        res += decodeChar(expr.slice(i, i+10))
    }
    return res
}

module.exports = {
    decode
}