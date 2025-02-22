/**function which accepts two strings, a message and some letters. The function should return ***true*** if the message can be built with the letters in the second string; otherwise, it should return ***false***.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters */

// Building a Frequency Couter Helper function
function freqCounter(str){
    const letterFreq = {};
    for (const letter of str){
        letterFreq[letter] = (letterFreq[letter] || 0) +1;
        } // END for loop
        return letterFreq;
}   // END freqCounter()


function constructNote(str1, str2){
    const letterFreqStr1 = freqCounter(str1);
    const letterFreqStr2 = freqCounter(str2);
    for (let letter in letterFreqStr1) {
        if (!letterFreqStr2[letter]) return false
        if (letterFreqStr1[letter] > letterFreqStr2[letter]) return false;
    } // END for..loop

    return true

}   // END constructNote()

module.exports = { freqCounter, constructNote }