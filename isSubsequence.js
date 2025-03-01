/** Function which takes in two strings and checks whether the characters in the first string 
 * form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters 
 * in the first string appear somewhere in the second string, 
 * without their order changing.
 */

function isSubsequenceV1(str1, str2) {
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    let left = 0;

    for(let letter of arr1) {
        const letterIdx = arr2.indexOf(letter, left);
        if (letterIdx === -1) return false;
        left = letterIdx;
    }   // END for loop
    return true;    
}   // END isSubsequenceV1()

function isSubsequenceV2(str1, str2){
    let left = 0;
    let right = 0;
    while(left < str1.length && right < str2.length){
        if (str1[left] === str2[right]){
            left ++; }
        right ++;
    }   // END while loop
    if (left == str1.length) return true;
    return false;
}   // END isSubsequenceV2()

module.exports = { isSubsequenceV1, isSubsequenceV2 }