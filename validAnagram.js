console.log("JS is running");

/** Assumptions:
 * valid strings are passed in
 * all strings will be lower case
 * no spaces, no punctuation
 * letters can only be used once
 */

// Non optimal version:
function validAnagramV1(str1, str2) {
    if (str1.length !== str2.length) return false;

    let arr2 = str2.split("");
    for (letter of str1){
        const foundIdx = arr2.indexOf(letter);

        if ( foundIdx !== -1) {
            arr2.splice(foundIdx, 1);
        } else {return false }
    }
    return true;
}   // END validAnagramV1


// Frequency Counter Helper
function freqCounter(str){
    const freqCount = {};
    for (letter of str){
        freqCount[letter] = (freqCount[letter] || 0 ) +1;

    }   // END for loop
    return freqCount;
}   // END freqCounter()

// Using Frequency Counter
function validAnagramV2(str1, str2){
    if (str1.length !== str2.length) return false;

    const str1FreqCount = freqCounter(str1);
    const str2FreqCount = freqCounter(str2);

    for (let key in str1FreqCount) {
        if ( str2FreqCount[key] === false) return false;
        if (str2FreqCount[key] !== str1FreqCount[key]) return false;
    }   // END for loop
    return true;
}   // END validAnagramV2

module.exports = {validAnagramV1, freqCounter, validAnagramV2}