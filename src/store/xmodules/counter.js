import * as counter from '../types';

const state = {
  [counter.DOUBLE_COUNTER]: 0
};

const getters = {
  doubleCounter(state) {}
};

const mutations = {
  intement() {}
};

const actions = {
  increment() {}
};

export default {
  state,
  getters,
  mutations,
  actions
};

const x = {
  computd: {
    ...mapGetters({
      doubleCOunter: types.DOUBLE_COUNTER
    })
  }
};
