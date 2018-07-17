const {
  commit,
  pre,
  next,
  showLogs,
  showAllLogs,
  showRefLogs,
  reset
} = require("./git");

commit({ a: 1 }, "初始化");

commit({ a: 1, b: 2 }, "添加一个");

commit({ a: 2 }, "修改a");

commit({ a: 1 }, "删除b");

pre();
// next();
pre();
pre();
pre();
next();

const asset = (bool, msg) => {
  if (!bool) {
    // eslint-disable-next-line
    console.warn(msg);
  }
};

asset(
  showLogs().length === 1,
  `当前日志长度应该为1,实际为${showLogs().length}`
);

asset(
  showAllLogs().length === 4,
  `当前总日志应该为4,实际为${showAllLogs().length}`
);

const refLogs = showRefLogs();

asset(refLogs.length === 9, `当前总日志应该为9,实际为${showAllLogs().length}`);

// reset到上上上上次操作
reset(refLogs[refLogs.length - 5]);

asset(
  showLogs().length === 3,
  `当前总日志应该为3,实际为${showAllLogs().length}`
);
