/**
 * function which accepts two arrays of varying lengths.
 * The first array consists of keys and the second one consists of values. 
 * The function should return an object created from the keys and values. 
 * If there are not enough values, the rest of keys should have a value of null. 
 * If there not enough keys, just ignore the rest of values.
 */

function twoArrayObject(keyArr, valArr) {
    const output = {};
    for (let i=0; i < keyArr.length; i++) {
        output[keyArr[i]] = valArr[i] || null;
    }
    return output;
}   // END twoArrayObject

module.exports = twoArrayObject;