module.exports = function toReadable (number) {
  
    let readableNumber = '';

    const digits = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    }

    const afterTen = {
        '0': 'ten',
        '1': 'eleven',
        '2': 'twelve',
        '3': 'thirteen',
        '4': 'fourteen',
        '5': 'fifteen',
        '6': 'sixteen',
        '7': 'seventeen',
        '8': 'eighteen',
        '9': 'nineteen'
    }

    const numbers = {
        '0': '',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    }

    const originalNumberString = String(number);;
    let numberString = String(number);

    if(numberString.length === 3) {
        let current = numberString.charAt(0);
        let next = numberString.charAt(1);
        readableNumber += digits[current]+ " hundred" + (next === '0' ? '' : " ");
        numberString = numberString.slice(1, numberString.length);
    }

    if(numberString.length === 2) {
        if (numberString.startsWith('1')) {
            const lasNumber = numberString.charAt(1);
            readableNumber += afterTen[lasNumber];
            numberString = '';
        } else {
            let current = numberString.charAt(0);
            let next = numberString.charAt(1);
            readableNumber += numbers[current] + (next === '0' ? '' : " ");
            numberString = numberString.charAt(1);
        }
    }

    if(numberString.length === 1 && numberString !== '0') { 
        let currentNumber = numberString.charAt(0);
        readableNumber += digits[currentNumber];
    }

    if(originalNumberString === '0') {
        return digits[originalNumberString];
    }

    return readableNumber;
}
