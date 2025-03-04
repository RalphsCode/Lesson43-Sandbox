const longestFall = require("./longestFall");

describe("Testing the longest fall function", function(){

    test("basic test", function() {
        const test1 = longestFall([5,4,3,2,1]);
        expect(test1).toEqual(5);
    })  // END test

    test("array containing one number multiple times", function() {
        const test1 = longestFall([2,2,2,2,2,2]);
        expect(test1).toEqual(1);
    })  // END test

    test("multiple falls test", function() {
        const test1 = longestFall([5, 4, 4, 4, 3, 2]);
        expect(test1).toEqual(3);
    })  // END test

    test("Multiple falls test", function() {
        const test1 = longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]);
        expect(test1).toEqual(5);
    })  // END test
    
    test("empty array", function() {
        const test1 = longestFall([]);
        expect(test1).toEqual(0);
    })  // END test

})  // END describe