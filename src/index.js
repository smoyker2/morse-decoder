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
    let fullsentence = '';
    for(let i =0; i< expr.length;)
    {
        if(expr[i] == '*')
        {
            fullsentence += ' ';
        }
        else
        {
        let currentdecoding = '';
        let sendtodecode = '';
        let currentsymbol = '';
        let receiveddecode;
        for(let j = 0; j < 10;j++)
        {
            currentdecoding += expr[i+j]//0000101110
        }
        sendtodecode = rawdecode(currentdecoding);
        fullsentence += sendtodecode; 
        }
        i++;i++;i++;i++;i++;i++;i++;i++;i++;i++;
    }
    return fullsentence;
}
function rawdecode(numbers)
{
    let foundedsymbol = '';
    for (let k = 0;k<numbers.length;)
    {
        if (numbers[k] == 0)
        {
            k++;
        }
        if (numbers[k] == 1)
        {
            if(numbers[k + 1] == 1)
            {
                foundedsymbol += '-';
                k++;
                k++;
            }
            else if(numbers[k+1] == 0)
            {
                foundedsymbol += '.'
                k++;
                k++;
            }
        }
    }
    const convert = (string) => {
        return foundedsymbol.split().map(sps => {
            return MORSE_TABLE[sps] ? MORSE_TABLE[sps] : sps;
    }).join("");
    };
    return convert(foundedsymbol);
}

module.exports = {
    decode
}
