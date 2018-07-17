const logs = [];
const refLogs = [];
let head = null;

function commit(any, msg) {
  const count = logs.push({
    id: logs.length,
    content: any,
    msg
  });

  head = count - 1;
  refLogs.push(head);
}
function showLogs() {
  return logs.slice(0, head + 1);
}

function showAllLogs() {
  return logs;
}

function showRefLogs() {
  return refLogs;
}

function reset(_head) {
  head = _head;
}

function goBack(stepCount) {
  head = stepCount - 1 > head ? 0 : head - stepCount;
  refLogs.push(head);
  return head;
}

const pre = () => goBack(1);
const next = () => goBack(-1);

module.exports = {
  commit,
  goBack,
  showLogs,
  pre,
  next,
  showAllLogs,
  showRefLogs,
  reset
};
