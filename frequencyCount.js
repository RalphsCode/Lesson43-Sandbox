// Alphanumberic frequency count
// count is case insensitive
// string can have spaces and punctuation

console.log("JS is running")

function freqCount(str) {
    const strLowerArr = str.toLowerCase().split("");
    // exclude punctuation
    const regExRange = /[a-z0-9]/i
    const frequency = {};

    for (let char of strLowerArr) {
        if (regExRange.test(char)){
            frequency[char] = frequency[char] + 1 || 1;
        }   // END if 
    }   // END for loop

    return(frequency);
}  // END freqCount()