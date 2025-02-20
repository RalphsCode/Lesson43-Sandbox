// Testing the validAnagram functions
const {validAnagramV1, freqCounter, validAnagramV2} = require ("./validAnagram");

describe("testing V1 function", function(){
    test('Valid Anagram', function() {
        let test1 = validAnagramV1("tacocat","catacot");
        expect(test1).toEqual(true);
    }) // END test

    test('Valid Anagram, no arguments', function() {
        let test1 = validAnagramV1("", "");
        expect(test1).toEqual(true);
    }) // END test

    test('invalid Anagram, not matching strings', function() {
        let test1 = validAnagramV1("aaz", "zza");
        expect(test1).toEqual(false);
    }) // END test

    test('invalid Anagram, not matching strings', function() {
        let test1 = validAnagramV1("rat", "car");
        expect(test1).toEqual(false);
    }) // END test   

    test('invalid Anagram, different length strings', function() {
        let test1 = validAnagramV1("awesome", "awesom");
        expect(test1).toEqual(false);
    }) // END test

    test('Valid Anagram', function() {
        let test1 = validAnagramV1("qwerty", "qeywrt");
        expect(test1).toEqual(true);
    }) // END test

    test('Valid Anagram, longer string', function() {
        let test1 = validAnagramV1("texttwisttime", "timetwisttext");
        expect(test1).toEqual(true);
    }) // END test

} ) // END describe


// Testing Version 2
describe("testing V2 function", function(){
    test('Valid Anagram', function() {
        let test1 = validAnagramV2("tacocat","catacot");
        expect(test1).toEqual(true);
    }) // END test

    test('Valid Anagram, no arguments', function() {
        let test1 = validAnagramV2("", "");
        expect(test1).toEqual(true);
    }) // END test

    test('invalid Anagram, not matching strings', function() {
        let test1 = validAnagramV2("aaz", "zza");
        expect(test1).toEqual(false);
    }) // END test

    test('invalid Anagram, not matching strings', function() {
        let test1 = validAnagramV2("rat", "car");
        expect(test1).toEqual(false);
    }) // END test   

    test('invalid Anagram, different length strings', function() {
        let test1 = validAnagramV2("awesome", "awesom");
        expect(test1).toEqual(false);
    }) // END test

    test('Valid Anagram', function() {
        let test1 = validAnagramV2("qwerty", "qeywrt");
        expect(test1).toEqual(true);
    }) // END test

    test('Valid Anagram, longer string', function() {
        let test1 = validAnagramV2("texttwisttime", "timetwisttext");
        expect(test1).toEqual(true);
    }) // END test

} ) // END describe