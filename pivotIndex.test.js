const {pivotIndexV1, pivotIndexV2} = require("./pivotIndex.js");

describe("testing the pivot Index version 1 functions", function() {

    test("basic test", function() {
        const test1 = pivotIndexV1([1,2,3,2,1]);
        expect(test1).toEqual(2);
    })  // END test

    
    test("longer test", function() {
        const test1 = pivotIndexV1([1,2,1,6,3,1]);
        expect(test1).toEqual(3);
    })  // END test  

    test("Invalid test - no pivot point", function() {
        const test1 = pivotIndexV1([5,2,7]);
        expect(test1).toEqual(-1);
    })  // END test  

        
    test("negative numbers test", function() {
        const test1 = pivotIndexV1([-1,3,-3,2]);
        expect(test1).toEqual(2);
    })  // END test  

})  // END describe


describe("testing the pivot Index version 2 functions", function() {

    test("basic test", function() {
        const test1 = pivotIndexV2([1,2,3,2,1]);
        expect(test1).toEqual(2);
    })  // END test

    
    test("longer test", function() {
        const test1 = pivotIndexV2([1,2,1,6,3,1]);
        expect(test1).toEqual(3);
    })  // END test  

    test("Invalid test - no pivot point", function() {
        const test1 = pivotIndexV2([5,2,7]);
        expect(test1).toEqual(-1);
    })  // END test  

        
    test("negative numbers test", function() {
        const test1 = pivotIndexV2([-1,3,-3,2]);
        expect(test1).toEqual(1);
    })  // END test  

})  // END describe