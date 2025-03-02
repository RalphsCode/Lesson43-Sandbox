const countPairs = require("./countPairs");

describe("Testing the countPairs function", function(){

    test("Basic test", function(){
        const test1 = countPairs([3,1,5,4,2], 6);
        expect(test1).toEqual(2);
    })  // END test

    test("Slightly longer test", function(){
        const test1 = countPairs([1,5,3,2,8,9,6,4], 7);
        expect(test1).toEqual(3);
    })  // END test

    test("Array of 1's test", function(){
        const test1 = countPairs([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2);
        expect(test1).toEqual(11);
    })  // END test

    test("Basic test", function(){
        const test1 = countPairs([1,2,3,4,5], 10);
        expect(test1).toEqual(0);
    })  // END test

    test("Negative target number test", function(){
        const test1 = countPairs([1,2,3,4,5], -3);
        expect(test1).toEqual(0);
    })  // END test

    test("Negative target number test, 0 value in array.", function(){
        const test1 = countPairs([0,-4],-4);
        expect(test1).toEqual(1);
    })  // END test
    
    test("Negative series test, valid", function(){
        const test1 = countPairs([1,2,3,0,-1,-2],0);
        expect(test1).toEqual(2);
    })  // END test

})  // END describe