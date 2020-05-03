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
    [types.IDPOST]: '',
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
    [types.IDPOST]: (state) => {
      return state[types.IDPOST];
    },
  },
  actions: {
    [types.getGMD]: ({ commit }, payload) => {
      commit(types.getGMD, payload);
    },
    [types.postGMD]: ({ commit }, { title, data }) => {
      commit(title, data);
    },
    [types.deleteGMD]: ({ commit }, payload) => {
      commit(types.deleteGMD, payload);
    },
    [types.searchPOST]: ({ commit }, payload) => {
      commit(types.searchPOST, payload);
    },
  },
  mutations: {
    [types.searchPOST]: (state, payload) => {
      axios
        .post(types.searchGMD, {
          search: payload,
        })
        .then((res) => res.data)
        .then((json) => (state[types.getGMD].result = json.data))
        .catch((err) => (state[types.getGMD].error = err));
    },
    [types.IDPOST]: (state, payload) => {
      state[types.IDPOST] = payload;
    },
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
    [types.postGMD]: (
      state,
      { method, id = undefined, gmd_code, gmd_name }
    ) => {
      let data;
      if (method == types.createPost) {
        data = axios.post(types.urlGMD, {
          gmd_code: gmd_code.toLowerCase(),
          gmd_name: gmd_name.toLowerCase(),
        });
      } else if (method == types.updatePOST) {
        data = axios.put(types.methodEventGmd`${id} ${types.editMethodGMD}`, {
          gmd_code: gmd_code.toLowerCase(),
          gmd_name: gmd_name.toLowerCase(),
        });
      }
      data
        .then((res) => (state[types.messageGMD].message = res.data))
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.deleteGMD]: (state, { id }) => {
      axios
        .delete(types.methodEventGmd`${id} ${types.deleteMethodGMD}`)
        .then((res) => (state[types.messageGMD].message = res.data))
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
  },
};
