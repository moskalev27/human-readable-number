module.exports = function toReadable(number) {
    // function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    }

    if ((number.toString().length === 1 || number.toString().length === 2) & number < 20) {
        return ones[number];
    }

    if (number.toString().length === 2 & number >= 20) {
        return (tens[parseInt(number / 10)] + ' ' + ones[number % 10]).trim();
    }
    if (number.toString().length === 3 & (parseInt((number % 100) / 10) != 0) & (parseInt((number % 100) / 10) != 1)) {
        return (ones[parseInt(number / 100)] + ' hundred ' + tens[(parseInt((number % 100) / 10))] + ' ' + ones[number % 10]).trim();
    }
    if (number.toString().length === 3) {
        return (ones[parseInt(number / 100)] + ' hundred ' + ones[number % 100]).trim();
    }
}
// console.log(toReadable(101));

