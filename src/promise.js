function Promise(fn) {
  this.data = null;
  this.error = null;
  fn((data) => (this.data = data), (error) => (this.error = error));
  return this;
}

Promise.prototype.then = function(cb) {
  if (this.data) {
    cb(this.data);
  }

  return this;
};

Promise.prototype.catch = function(cb) {
  if (this.error) {
    cb(this.error);
  }

  return this;
};

module.exports = {
  Promise
};
