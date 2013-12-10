function err(fn, msg) {
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

module.exports = function(hydro) {
  hydro.set({
    formatter: 'hydro-simple',
    plugins: ['hydro-bdd'],
    attach: global,
    globals: {
      chai: require('chai'),
      err: err,
    },
    tests: [
      'test/*.js',
    ]
  });
};
