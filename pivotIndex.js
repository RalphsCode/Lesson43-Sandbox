/**
 * Function which accepts an array of integers, and 
 * returns the pivot index where the sum of the 
 * items to the left equal to the sum of the items 
 * to the right. If there are more than one valid 
 * pivot index, return the smallest value.
 */

function pivotIndexV1(arr) {
    let mid = Math.floor(arr.length/2);

    for(let i=1; i<arr.length +1; i++){
        let leftSum = 0;
        let rightSum = 0;

        // leftSum sum loop
        for (let j=0; j<mid; j++){
            leftSum += arr[j];
        }

        // rightSum sum loop
        for (let x =mid +1; x < arr.length; x++){
            rightSum += arr[x];
        }

        console.log(leftSum, "Current middle index:", mid, rightSum);

        if (leftSum == rightSum) {
            console.log("Success mid point found")
            return mid;
        }
        if (mid !== arr.length-1){
        mid++;
            } else {
                mid = 1;
    }
}
    return -1; 
}   // END pivotIndexV1()


function pivotIndexV2(arr){
    let leftSum = arr[0];
    const totalSum = arr.reduce((sum, val) => (sum + val),0)
    for (let i=1; i < arr.length; i++){
        if (leftSum == ( totalSum -leftSum - arr[i] ) )  {
            return i;
        }
        leftSum += arr[i];
    }   // END for loop
    return -1;
}   // END pivotIndexV2()

module.exports = {pivotIndexV1, pivotIndexV2};