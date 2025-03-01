const {isSubsequenceV1, isSubsequenceV2 } = require("./isSubsequence.js");

describe("Testing the isSubsequenceV1 function", function() {

    test('Basic valid test', function(){
        const test1 = isSubsequenceV1('hello', 'hello world'); 
        expect(test1).toEqual(true);
    })  // END test

    test('Longer second string test', function(){
        const test1 = isSubsequenceV1('abc', 'abracadabra'); 
        expect(test1).toEqual(true);
    })  // END test

    test('Incorrect order in second string', function(){
        const test1 = isSubsequenceV1('abc', 'acb'); 
        expect(test1).toEqual(false);
    })  // END test

})  // END describe


describe("Testing the isSubsequenceV2 function", function() {

    test('Basic valid test', function(){
        const test1 = isSubsequenceV2('hello', 'hello world'); 
        expect(test1).toEqual(true);
    })  // END test

    test('Longer second string test', function(){
        const test1 = isSubsequenceV2('abc', 'abracadabra'); 
        expect(test1).toEqual(true);
    })  // END test

    test('Incorrect order in second string', function(){
        const test1 = isSubsequenceV2('abc', 'acb'); 
        expect(test1).toEqual(false);
    })  // END test

})  // END describe