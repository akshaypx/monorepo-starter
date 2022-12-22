'use strict';

const simpleSharedData = require('..');
const assert = require('assert').strict;

assert.strictEqual(simpleSharedData(), 'Hello from simpleSharedData');
console.info("simpleSharedData tests passed");
