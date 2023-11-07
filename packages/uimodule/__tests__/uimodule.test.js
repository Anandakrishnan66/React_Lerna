'use strict';

const uimodule = require('..');
const assert = require('assert').strict;

assert.strictEqual(uimodule(), 'Hello from uimodule');
console.info('uimodule tests passed');
