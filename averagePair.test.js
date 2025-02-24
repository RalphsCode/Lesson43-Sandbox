const {averagePair} = require("./averagePair");

describe("Average Pair Testing", function() {

    test("Basic valid test", function(){
        const test1 = averagePair([1, 2, 3], 2);
        expect(test1).toEqual(true);
    })  // END test

    test("Basic valid test, longer array, duplicate", function(){
        const test1 = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
        expect(test1).toEqual(true);
    })  // END test

    test("Basic Invalid test", function(){
        const test1 = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
        expect(test1).toEqual(false);
    })  // END test

    test("Invalid test, empty array", function(){
        const test1 = averagePair([], 4);
        expect(test1).toEqual(false);
    })  // END test

    test("Invalid test, no match", function(){
        const test1 = averagePair(averagePair([1, 3, 5, 7], 6));
        expect(test1).toEqual(false);
    })  // END test
    
})  // END describe