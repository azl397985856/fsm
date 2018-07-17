function fsm(cb) {
  let state = {};
  const reducers = {
    doSomething(payload) {
      state = Object.assign({}, state, { ...payload });
      cb(state);
      return state;
    }
  };
  return {
    getState() {
      return state;
    },
    actions: {
      doSomething(payload) {
        reducers.doSomething(payload);
      }
    }
  };
}

module.exports = {
  fsm
};
