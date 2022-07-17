```sh
npm run sunglas
```

*or*

```js
!function r(n,e,t){function u(i,f){if(!e[i]){if(!n[i]){var s="function"==typeof require&&require;if(!f&&s)return s(i,!0);if(o)return o(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var c=e[i]={exports:{}};n[i][0].call(c.exports,(function(r){return u(n[i][1][r]||r)}),c,c.exports,r,n,e,t)}return e[i].exports}for(var o="function"==typeof require&&require,i=0;i<t.length;i++)u(t[i]);return u}({1:[function(r,n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.squish=e.sunglas=void 0;var t=0;e.sunglas=function r(n){return t++,n.forEach((function(n){Array.isArray(n)&&r(n)})),function(r){var n;r.reverse().push(null!==(n=r.shift())&&void 0!==n?n:(new Error).toString())}(n),function(r){var n=r.every((function(r){return"string"==typeof r}));t>1&&!n&&(r.unshift("("),r.push(")"))}(n),t--,n},e.squish=function(r){for(;r.some((function(r){return Array.isArray(r)}));)r=r.map((function(r){return Array.isArray(r)?r.flat().join(" "):r}));return r.join(" ").replace(/(\( | \))/g,(function(r){return r.trim()}))}},{}],2:[function(r,n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("./app");console.log((0,t.squish)((0,t.sunglas)(["OR",["<","a","b"],["AND",["==","c","d"],["!=","e","f"]]])))},{"./app":1}]},{},[2]);
```
