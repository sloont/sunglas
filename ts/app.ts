/***********************************************************************
 
 based on data input and expected output:

 every type Array needs to swap indexes 0 and 1
 this function does that.

************************************************************************/

function shiftInsert(array: dataArray): void {
    //
    //we could use [a[0], a[1]] = [a[1], a[0]]
    //no fun though

    array.reverse()
        .push(
            array.shift() ??
            new Error().toString()
        );

    return;
}

// we need these for input traversal

let depth: number = 0
const DESIRED = 1;

/************************************************************************

 referring to the input data structure as a 'depth 0' array:

 need to find a depth 2 array. if so, wrap it in parenthesis
 again, kind of specific to the problem

 this function will insert '(' at index 0 and ')' at index array.length -1
 for arrays of depth > 'DESIRED' that contain an array.

 it's about as useful as it sounds...

************************************************************************/

function pemdas(array: dataArray): void {
    //
    const stop = array.every(
        (item) => {
          return typeof item === 'string'; // CHECK IF WE CAN REVERSE
        }
    );

    if (
        depth > DESIRED &&
        !stop
    ) {
        array.unshift('(');
        array.push(')');
    }
} 

/************************************************************************

 the money function.

 now that i'm finished with this, i'm realizing just how bad it is...

 :sunglas:

************************************************************************/

export function sunglas(array: dataArray): dataArray {

    depth++;
    //
    array.forEach(
        (item) => {
            //                
            if (!Array.isArray(item)) {
                return;
            }
            else {
                sunglas(item);
            }
            
        }
    );

    shiftInsert(array);
    pemdas(array);

    depth--;

    return array;
}

/************************************************************************

 flatten and join.

 also remove the single space on the insides of the parentheses.
 this wouldn't be complete without RegExp

************************************************************************/

export function squish(array: dataArray): string {
    //
    while (
        array.some(
            (item) => {
                return Array.isArray(item);
            }
        )
    ) {
        array = array.map(
            (item) => {
                if (Array.isArray(item)) {
                    //
                    return item.flat().join(' ');
                } else {
                    return item
                }
            }
        )
    }

    // then the outer most array.
    return array.join(' ')
        //
        // string method now
        //
        .replace(
            /(\( | \))/g,
            //
            (match: string) => {
                return (
                    match.trim()
                )
            }
        );
}
