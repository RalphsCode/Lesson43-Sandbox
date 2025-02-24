/** Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array 
 * where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.

**Constraints**:

Time Complexity: O(N)
*/

function averagePair(arr,target) {
    let left = 0;
    let right = arr.length -1;
        while (left < right) {
            const currAve = (arr[left] + arr[right]) /2;
            if ( currAve === target) return true;

            if (currAve > target) {
                right--;
            } else if (currAve < target) {
                left++;
            }
        }   // END while loop
    // If we get to here, no pair equals the target
        return false
}   // END averagePair

module.exports = { averagePair }