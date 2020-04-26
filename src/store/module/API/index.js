import axios from './axios';
import * as types from './type';

export default {
  state: {
    [types.getGMD]: {
      result: [],
      error: [],
      title: '',
    },
    [types.messageGMD]: {
      message: '',
      warning: '',
      error: '',
    },
    [types.getType]: '',
  },
  getters: {
    [types.getGMD]: (state) => {
      return state[types.getGMD];
    },
    [types.getType]: (state) => {
      return state[types.getType];
    },
    [types.getGMD]: (state) => {
      return state[types.getGMD];
    },
    [types.messageGMD]: (state) => {
      return state[types.messageGMD];
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
    [types.getType]: (state, payload) => {
      state[types.getType] = payload;
    },
    [types.getGMD]: (state, { skip, take }) => {
      axios
        .get(types.urlGMD, {
          params: {
            skip,
            take,
          },
        })
        .then((res) => res.data)
        .then((json) => (state[types.getGMD].result = json.data))
        .catch((err) => (state[types.getGMD].error = err));
    },
    [types.postGMD]: (state, { gmd_code, gmd_name }) => {
      axios
        .post(types.urlGMD, {
          gmd_code: gmd_code.toLowerCase(),
          gmd_name: gmd_name.toLowerCase(),
        })
        .then((res) => (state[types.messageGMD].message = res.data))
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
  },
};
