"use strict";
/***********************************************************************
 
 based on data input and expected output:

 every type Array needs to swap indexes 0 and 1
 this function does that.

************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.squish = exports.sunglas = void 0;
function shiftInsert(array) {
    //
    //we could use [a[0], a[1]] = [a[1], a[0]]
    //no fun though
    var _a;
    array.reverse()
        .push((_a = array.shift()) !== null && _a !== void 0 ? _a : new Error().toString());
    return;
}
// we need these for input traversal
var depth = 0;
var DESIRED = 1;
/************************************************************************

 referring to the input data structure as a 'depth 0' array:

 need to find a depth 2 array. if so, wrap it in parenthesis
 again, kind of specific to the problem

 this function will insert '(' at index 0 and ')' at index array.length -1
 for arrays of depth > 'DESIRED' that contain an array.

 it's about as useful as it sounds...

************************************************************************/
function pemdas(array) {
    //
    var stop = array.every(function (item) {
        return typeof item === 'string'; // CHECK IF WE CAN REVERSE
    });
    if (depth > DESIRED &&
        !stop) {
        array.unshift('(');
        array.push(')');
    }
}
/************************************************************************

 the money function.

 now that i'm finished with this, i'm realizing just how bad it is...

 :sunglas:

************************************************************************/
function sunglas(array) {
    depth++;
    //
    array.forEach(function (item) {
        //                
        if (!Array.isArray(item)) {
            return;
        }
        else {
            sunglas(item);
        }
    });
    shiftInsert(array);
    pemdas(array);
    depth--;
    return array;
}
exports.sunglas = sunglas;
/************************************************************************

 flatten and join.

 also remove the single space on the insides of the parentheses.
 this wouldn't be complete without RegExp

************************************************************************/
function squish(array) {
    //
    while (array.some(function (item) {
        return Array.isArray(item);
    })) {
        array = array.map(function (item) {
            if (Array.isArray(item)) {
                //
                return item.flat().join(' ');
            }
            else {
                return item;
            }
        });
    }
    // then the outer most array.
    return array.join(' ')
        //
        // string method now
        //
        .replace(/(\( | \))/g, 
    //
    function (match) {
        return (match.trim());
    });
}
exports.squish = squish;
//# sourceMappingURL=app.js.map