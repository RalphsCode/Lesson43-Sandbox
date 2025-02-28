/**
 * Function which accepts an array of non-zero integers. 
 * Separate the positive integers to the left and the negative integers to the right. 
 * The positive numbers and negative numbers need not be in sorted order. 
 * The problem should be done in place.
 */

function separatePositive(arr) {
    // Splice it out, shift it to beginning (positive)
    // or push it to end (negative)
    let left = 0;
    let right = arr.length -1;
    while (left <= right){
        const element = arr.splice(left,1)[0];
        if (element < 0){
            arr.push(element);
            right--;
        } else {
            arr.unshift(element);
            left++;
        }   // END if...else...
    }   // END while loop
    return arr;
}   // END separatePositive()

module.exports = separatePositive