/**
 * External dependencies.
 */

var chai = require('chai');
var test = require('hydro');

/**
 * Expose `chai`.
 */

global.chai = chai;

/**
 * Include stack traces.
 */

chai.Assertion.includeStack = true;

/**
 * Provide check for fail function.
 */

global.err = function (fn, msg) {
  try {
    fn();
    throw new chai.AssertionError({ message: 'Expected an error' });
  } catch (err) {
    if ('string' === typeof msg) {
      chai.expect(err.message).to.equal(msg);
    } else {
      chai.expect(err.message).to.match(msg);
    }
  }
};

/**
 * Expose `hydro`.
 */

global.it = test;
global.describe = test.suite;
