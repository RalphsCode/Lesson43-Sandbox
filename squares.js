/** function that has an array of numbers, and 
 * a second array that has the same numbers squared.
 */

function squared(arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    for (num of arr1) {
        const squareIdx = arr2.indexOf(num*num);
        if ( squareIdx != -1 ){
            arr2.splice(squareIdx, 1);
        } else {
            return false
        }  // END if else
    }   // END for loop
    return true;
}   // END squared()

module.exports = {squared};