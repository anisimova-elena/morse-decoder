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

function decode(expr) {
    let res = "";
    let morse = "";
    for (let i = 0; i < expr.length; i += 10) {
        for (let k = i; k != (i + 10) ; k += 2) {
            if ((expr[k] === "0") && (expr[k + 1] === "0")) { continue; }
            if ((expr[k] === "1") && (expr[k + 1] === "0")) { morse +="."; continue;}
            if ((expr[k] === "1") && (expr[k + 1] === "1")) { morse +="-"; continue;}
            if (expr[k] === "*") { res+=" "; break; }
        }
        if (morse != "") { res += MORSE_TABLE[morse]; }
        morse = "";
    }
    return res;
}

module.exports = {
    decode
}