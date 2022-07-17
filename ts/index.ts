/************************************************************************

Using Javascript, convert the following array:

[ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]

to:

"a < b OR (c == d AND e != f)"

Please make your response as elegant and legible as possible

************************************************************************/

let input: dataArray = [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ];

///////// PROGRAM ///////////////////////////////////////////////////////

import {  sunglas, squish } from './app'

console.log(squish(sunglas(input)));
