/** 
 * Function which accepts an array of integers, and 
 * returns the length of the longest consecutive 
 * decrease of integers.
 */

function longestFall(arr) {
    if (arr.length === 0) return 0;
    let count = 1;
    let max = 1;
    for (let i=1; i<arr.length; i++){
        if (arr[i] < arr[i-1]){
            count++;
            if (count > max){
                max=count;
            }
        } else {
            count = 1;
        }
    }   // END for loop
    return max;
}   // END longestFall()

module.exports = longestFall;