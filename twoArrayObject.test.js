const twoArrayObject = require('./twoArrayObject');

describe("Testing the two array object", function() {

    test("Basic valid test", function(){
        const test1 = twoArrayObject(['a', 'b', 'c'], [1, 2, 3]);
        expect(test1).toEqual({'a': 1, 'b': 2, 'c': 3})
    }) // END test

    test("Larger first array test", function(){
        const test1 = twoArrayObject(['a', 'b', 'c', 'd','e'], [1, 2, 3]);
        expect(test1).toEqual({'a': 1, 'b': 2, 'c': 3, 'd': null, 'e':null})
    }) // END test

    test("Larger second array test", function(){
        const test1 = twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3, 4, 5, 6, 7]);
        expect(test1).toEqual({'a': 1, 'b': 2, 'c': 3, 'd': 4})
    }) // END test

    test("empty arrays", function(){
        const test1 = twoArrayObject([], []);
        expect(test1).toEqual({})
    }) // END test

})  // END describe