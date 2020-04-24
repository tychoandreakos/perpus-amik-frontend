import axios from './axios';
import * as types from './type';

export default {
  state: {
    [types.getGMD]: {
      result: [],
      error: [],
    },
  },
  getters: {
    [types.getGMD]: (state) => {
      return state[types.getGMD];
    },
  },
  actions: {
    [types.getGMD]: ({ commit }, payload) => {
      commit(types.getGMD, payload);
    },
    [types.postGMD]: ({ commit }, { title, data }) => {
      commit(title, data);
    },
  },
  mutations: {
    [types.getGMD]: (state, { skip, take }) => {
      axios
        .get('gmd', {
          params: {
            skip,
            take,
          },
        })
        .then((res) => res.data)
        .then((json) => (state[types.getGMD].result = json.data))
        .catch((err) => (state[types.getGMD].error = err));
    },
    [types.postGMD]: (state, payload) => {
     
      console.log('this is data from payload', payload);
    },
  },
};
