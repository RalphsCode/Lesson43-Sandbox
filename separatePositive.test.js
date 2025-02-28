const separatePositive = require("./separatePositive");

describe("Testing the separate Positive from Negative function", function() {

    test("Basic valid result test", function(){
        const test1 = separatePositive([2, -1, -3, 6, -8, 10]);
        expect(test1).toEqual([10, 6, 2, -1, -3, -8]);
    })  // END test

    test("Positive overload test", function(){
        const test1 = separatePositive([5, 10, -15, 20, 25]);
        expect(test1).toEqual([25,20,10,5,-15]);
    })  // END test

    test("Basic 2 element test", function(){
        const test1 = separatePositive([-5, 5]);
        expect(test1).toEqual([5, -5]);
    })  // END test
    
    test("All positive number test", function(){
        const test1 = separatePositive([1,2,3]);
        expect(test1).toEqual([3,2,1]);
    })  // END test
        
    test("All negative number test", function(){
        const test1 = separatePositive([-1,-2,-3,-4]);
        expect(test1).toEqual([-1,-2,-3,-4]);
    })  // END test

    test("Single positive number test", function(){
        const test1 = separatePositive([225]);
        expect(test1).toEqual([225]);
    })  // END test



})  // END describe