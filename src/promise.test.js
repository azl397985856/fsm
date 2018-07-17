const { Promise } = require('./promise');

it('Promise-失败', () => {
  const successFn = jest.fn();
  const errorFn = jest.fn();
  new Promise((resolve, reject) => {
    const bool = false;
    if (bool) {
      resolve({ a: 1 });
    } else {
      reject(
        new Error({
          msg: '错误'
        })
      );
    }
  })
    .then(successFn)
    .catch(errorFn);

  expect(errorFn).toHaveBeenCalled();
  expect(successFn).not.toHaveBeenCalled();
});

it('Promise-成功', () => {
  const successFn = jest.fn();
  const errorFn = jest.fn();
  new Promise((resolve, reject) => {
    const bool = true;
    if (bool) {
      resolve({ a: 1 });
    } else {
      reject(
        new Error({
          msg: '错误'
        })
      );
    }
  })
    .then(successFn)
    .catch(errorFn);

  expect(successFn).toHaveBeenCalled();
  expect(errorFn).not.toHaveBeenCalled();
});
