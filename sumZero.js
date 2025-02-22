// accepts a sorted array of integers, and finds the first pair where the sum is 0.

function sumZeroV1(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) break;
        for (let j=i+1; j<arr.length; j++){
            if (arr[i] + arr[j] == 0) {
                console.log("pair found");
                return [arr[i], arr[j]]
            }
        }
    }
    console.log("No pair summing to 0 found.")
    return false
} // END sumZeroV1()

// Using multiple pointers
function sumZeroV2(arr) {
    let left = 0;
    let right = arr.length -1;
    while (arr[left] < arr[right]){
        console.log(arr[left], arr[right]);
            const sum = arr[left] + arr[right];
            if ( sum == 0) {
                console.log("pair found");
                return [arr[left], arr[right]]
            } else if (sum < 0) {
                left++
            } else {
                right--
            };
    };
    
    console.log("No pair summing to 0 found.")
    return false
} // END sumZeroV2()

module.exports = {sumZeroV1, sumZeroV2 }