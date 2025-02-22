// Testing both versions of the sumZero functions
const {sumZeroV1, sumZeroV2} = require('./sumZero');

describe("Testing the sumZero function Version 1", function(){

    test("Basic valid test", function() {
        const test1 = sumZeroV1([-20,-10,0,10,20,30,40]);
        expect(test1).toEqual([-20,20]);
    } )

    test("Basic Invalid test", function() {
        const test1 = sumZeroV1([-20,-15,0,10,22,30,40]);
        expect(test1).toEqual(false);
    } )

    test("Empty Array Invalid test", function() {
        const test1 = sumZeroV1([]);
        expect(test1).toEqual(false);
    } )

})  // END Describe



describe("Testing the sumZero function Version 2", function(){

    test("Basic valid test", function() {
        const test1 = sumZeroV2([-20,-10,0,10,20,30,40]);
        expect(test1).toEqual([-20,20]);
    } )

    test("Basic Invalid test", function() {
        const test1 = sumZeroV2([-20,-15,0,10,22,30,40]);
        expect(test1).toEqual(false);
    } )

    test("Empty Array Invalid test", function() {
        const test1 = sumZeroV2([]);
        expect(test1).toEqual(false);
    } )

})  // END Describe