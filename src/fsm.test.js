const { fsm } = require('./fsm');

const fn = jest.fn();
const sm = fsm(fn);

sm.actions.doSomething({ a: 1 });

sm.actions.doSomething({ a: 5 });

sm.actions.doSomething({ b: 1 });
it('actions', () => {
  sm.actions.doSomething({ a: 1 });
  expect(fn).toHaveBeenCalledWith({
    a: 1
  });

  sm.actions.doSomething({ a: 5 });
  expect(fn).toHaveBeenCalledWith({
    a: 5
  });

  sm.actions.doSomething({ b: 1 });
  expect(fn).toHaveBeenCalledWith({
    a: 5,
    b: 1
  });
});
