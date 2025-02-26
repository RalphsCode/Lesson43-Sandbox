const { sameFrequency } = require ("./sameFrequency");

describe("Testing the Same Frequency function", function() {

    test("basic valid test", function() {
        const test1 = sameFrequency(12345, 54321);
        expect(test1).toEqual(true);
    })  // END test

    test("basic Invalid test", function() {
        const test1 = sameFrequency(23456, 54321);
        expect(test1).toEqual(false);
    })  // END test

    test("basic Invalid test different lengths A", function() {
        const test1 = sameFrequency(12345, 7654321);
        expect(test1).toEqual(false);
    })  // END test

    test("basic Invalid test different lengths B", function() {
        const test2 = sameFrequency(1234567, 54321);
        expect(test2).toEqual(false);
    })  // END test

})  // END describe