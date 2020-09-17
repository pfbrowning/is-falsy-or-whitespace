# is-falsy-or-whitespace
[![npm version](https://badge.fury.io/js/is-falsy-or-whitespace.svg)](https://badge.fury.io/js/is-falsy-or-whitespace)
![Github Actions](https://github.com/pfbrowning/is-falsy-or-whitespace/workflows/Node.js%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/pfbrowning/is-falsy-or-whitespace/badge.svg?branch=master)](https://coveralls.io/github/pfbrowning/is-falsy-or-whitespace?branch=master)

## Introduction
`is-falsy-or-whitespace` is a simple function whose purpose is to determine whether a string is semantically empty.  It's inspired by `string.isNullOrWhitespace` in the .NET stack.

## Imports
ES2015 Import
```ts
import isFalsyOrWhitespace from 'is-falsy-or-whitespace';
```
CommonJS Require
```js
const isFalsyOrWhitespace = require('is-falsy-or-whitespace').default;
```

## Results
```ts
isFalsyOrWhitespace(null)                       // true
isFalsyOrWhitespace(undefined)                  // true
isFalsyOrWhitespace('')                         // true
isFalsyOrWhitespace('                 ')        // true
isFalsyOrWhitespace('    ')                     // true
isFalsyOrWhitespace(0)                          // true
isFalsyOrWhitespace(NaN)                        // true
isFalsyOrWhitespace(false)                      // true
isFalsyOrWhitespace('undefined')                // false
isFalsyOrWhitespace('null')                     // false
isFalsyOrWhitespace('some non blank string')    // false
isFalsyOrWhitespace('          a          ')    // false
isFalsyOrWhitespace([])                         // false
isFalsyOrWhitespace({})                         // false
isFalsyOrWhitespace(1)                          // false
```