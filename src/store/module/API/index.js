import axios from './axios';
import * as types from './type';

export default {
  state: {
    [types.getGMD]: {
      result: [],
      error: [],
      title: '',
    },
    [types.loadingState]: true,
    [types.loadingBackdrop]: false,
    [types.searchPOST]: '',
    [types.messageGMD]: {
      message: '',
      warning: '',
      error: '',
    },
    [types.getType]: '',
    [types.IDPOST]: '',
  },
  getters: {
    [types.loadingState]: (state) => {
      return state[types.loadingState];
    },
    [types.loadingBackdrop]: (state) => {
      return state[types.loadingBackdrop];
    },
    [types.getGMD]: (state) => {
      return state[types.getGMD];
    },
    [types.getType]: (state) => {
      return state[types.getType];
    },
    [types.getGMD]: (state) => {
      return state[types.getGMD];
    },
    [types.searchPOST]: (state) => {
      return state[types.searchPOST];
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
      state[types.searchPOST] = payload;
      state[types.loadingBackdrop] = true;
      axios
        .post(types.searchGMD, {
          search: payload,
        })
        .then((res) => res.data)
        .then((json) => {
          state[types.getGMD].result = json.data;
          setTimeout(() => {
            state[types.loadingBackdrop] = false;
          }, 1000);
        })
        .catch((err) => (state[types.getGMD].error = err));
    },
    [types.IDPOST]: (state, payload) => {
      state[types.IDPOST] = payload;
    },
    [types.getType]: (state, payload) => {
      state[types.getType] = payload;
    },
    [types.getGMD]: (state, { skip, take }) => {
      state[types.loadingBackdrop] = true;
      axios
        .get(types.urlGMD, {
          params: {
            skip,
            take,
          },
        })
        .then((res) => res.data)
        .then((json) => {
          if (state[types.searchPOST].length > 1) {
            state[types.searchPOST] = '';
          }
          state[types.getGMD].result = json.data;
          setTimeout(() => {
            state[types.loadingBackdrop] = false;
          }, 1000);
        })
        .catch((err) => (state[types.getGMD].error = err));
    },
    [types.postGMD]: (
      state,
      { method, id = undefined, gmd_code, gmd_name }
    ) => {
      state[types.loadingState] = !state[types.loadingState];
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
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.loadingState] = !state[types.loadingState];
        })
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
