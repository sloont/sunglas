"use strict";
/************************************************************************

Using Javascript, convert the following array:

[ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]

to:

"a < b OR (c == d AND e != f)"

Please make your response as elegant and legible as possible

************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var input = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]];
///////// PROGRAM ///////////////////////////////////////////////////////
var app_1 = require("./app");
console.log((0, app_1.squish)((0, app_1.sunglas)(input)));
//# sourceMappingURL=index.js.map