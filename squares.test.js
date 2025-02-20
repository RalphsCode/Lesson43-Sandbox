// Testing the squares file & functions
const {squared} = require ("./squares");

describe("testing squares function", function(){
    test('different arr lengths', function() {
        let test1 = squared([1,2,3],[1,4]);
        expect(test1).toEqual(false);
    }) 

    test('valid arrays', function() {
        let test1 = squared([1,2,3],[9,1,4]);
        expect(test1).toEqual(true);
    }) 

    test('Incorrect squared value', function() {
        let test1 = squared([1,2,3],[1,4,4]);
        expect(test1).toEqual(false);
    }) 
    
});