const {
  commit,
  pre,
  next,
  showLogs,
  showAllLogs,
  showRefLogs,
  reset
} = require('./git');

commit({ a: 1 }, '初始化');

commit({ a: 1, b: 2 }, '添加一个');

commit({ a: 2 }, '修改a');

commit({ a: 1 }, '删除b');

pre();
// next();
pre();
pre();
pre();
next();

// it 里面的代码是异步执行的， 外侧的代码是同步执行的。
// so， be carefull

it('当前日志长度应该为1', () => {
  expect(showLogs().length).toBe(1);
});

it('总日志应该为4', () => {
  expect(showAllLogs().length).toBe(4);
});

const refLogs = showRefLogs();

it('refLogs长度应该为9', () => {
  expect(refLogs.length).toBe(9);
});

it('回退之后当前日志长度变为3', () => {
  // reset到上上上上次操作
  reset(refLogs[refLogs.length - 5]);
  expect(showLogs().length).toBe(3);
});
