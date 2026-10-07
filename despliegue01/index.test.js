const test = require('node:test');
const assert = require('node:assert/strict');

test('el entorno de Node está disponible', () => {
  assert.equal(typeof process.env, 'object');
});
