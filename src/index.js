module.exports = function toReadable(number) {
    const numberToArray = number.toString().split('');
    const zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenths = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (numberToArray.length === 1) {
        return zeroToNine[number];
    } else if (numberToArray.length === 2) {
        if (number >= 10 && number < 20) {
            return tenToNineteen[number - 10];
        } else if (number >= 20 && number % 10 === 0) {
            return tenths[numberToArray[0] - 2];
        } else if (number > 20 && number % 10 !== 0) {
            return `${tenths[numberToArray[0] - 2]} ${zeroToNine[numberToArray[1]]}`;
        }
    } else if (numberToArray.length === 3) {
        const hundreds = zeroToNine[+numberToArray[0]] + ' hundred';

        if (+numberToArray[1] === 0 && +numberToArray[2] === 0) {
            return hundreds;
        } else if (+numberToArray[1] === 0) {
            return `${hundreds} ${zeroToNine[+numberToArray[2]]}`;
        } else if (+numberToArray[1] === 1) {
            return `${hundreds} ${tenToNineteen[+numberToArray[2]]}`;
        } else if (+numberToArray[1] >= 2 && +numberToArray[2] === 0) {
            return `${hundreds} ${tenths[+numberToArray[1] - 2]}`;
        } else if (+numberToArray[1] >= 2 && +numberToArray[2] !== 0) {
            return `${hundreds} ${tenths[+numberToArray[1] - 2]} ${zeroToNine[+numberToArray[2]]}`;
        }
    }
}
