/**
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 */

function freqCount(num){
    const numFreq = {};
    // Change the number to a string & split it to an array
    const number = String(num);
    numArr = number.split('');

    for (digit of numArr){
        numFreq[digit] = ( numFreq[digit] || 0 ) +1;
    }
    return numFreq;
}   // END freqCount()


function sameFrequency(num1, num2) {
    // Check if two integers contain the same digits
    if (String(num1).length !== String(num2).length) return false;
    // Get a frequency count object for each passed in number
    num1Freq = freqCount(num1);
    num2Freq = freqCount(num2);

    for (digit in num1Freq) {
        if (num1Freq[digit] !== num2Freq[digit]) return false;
    }   // END for loop
    return true;

}   // END sameFrequency()


module.exports = { freqCount, sameFrequency }