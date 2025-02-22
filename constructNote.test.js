const { freqCounter, constructNote } = require("./constructNote");

// Testing the constructNote freqCount helper function 
 describe("Testing the frequency counter function", function() {

    test("Simple valid test", function(){
        const test1 = freqCounter('anagram');
        expect(test1).toEqual({a:3,g:1,m:1,n:1,r:1})
    })  // END test

 }) // END Describe


 // Testing the constructNote function 
 describe("Testing the constructNote function", function() {

    test("Simple valid test", function(){
        const test1 = constructNote('anagram','granama');
        expect(test1).toEqual(true)
    })  // END test

    test("Simple Invalid test", function(){
        const test1 = constructNote('panagram','granama');
        expect(test1).toEqual(false)
    })  // END test

    test("Overload second string valid test", function(){
        const test1 = constructNote('anagram','panamagranama');
        expect(test1).toEqual(true)
    })  // END test

    test("Overload second string valid test II", function(){
        const test1 = constructNote('aabbcc', 'bcabcaddff');
        expect(test1).toEqual(true)
    })  // END test

 }) // END Describe