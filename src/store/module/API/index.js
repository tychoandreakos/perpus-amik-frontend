import axios from './axios';
import * as types from './type';

export default {
  state: {
    [types.checkbox]: {},
    [types.getGMD]: {
      result: [],
      error: [],
      title: '',
    },
    [types.checkBoxControl]: false,
    [types.getDestroy]: {
      result: [],
      error: [],
      title: '',
    },
    [types.tableId]: [],
    [types.memo]: '',
    [types.dialogValue]: '',
    [types.dialog]: false,
    [types.loadingState]: true,
    [types.loadingBackdrop]: false,
    [types.decision]: false,
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
    [types.checkBoxControl]: (state) => {
      return state[types.checkBoxControl];
    },
    [types.getDestroy]: (state) => {
      return state[types.getDestroy];
    },
    [types.checkbox]: (state) => {
      return state[types.checkbox];
    },
    [types.dialog]: (state) => {
      return state[types.dialog];
    },
    [types.decision]: (state) => {
      return state[types.decision];
    },
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
    [types.getDestroy]: ({ commit }, payload) => {
      commit(types.getDestroy, payload);
    },
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
    [types.DeleteSome]: ({ commit }, payload) => {
      commit(types.DeleteSome, payload);
    },
    [types.deleteSomeGMD]: ({ commit }) => {
      commit(types.deleteSomeGMD);
    },
    [types.restoreSome]: ({ commit }, payload) => {
      commit(types.restoreSome, payload);
    },
    [types.destroyData]: ({ commit }, payload) => {
      commit(types.destroyData, payload);
    },
    [types.destroyCollection]: ({ commit }) => {
      commit(types.destroyCollection);
    },
    [types.destroyAll]: ({ commit }) => {
      commit(types.destroyAll);
    },
    [types.restoreAll]: ({ commit }) => {
      commit(types.restoreAll);
    },
    [types.restoreCollection]: ({ commit }) => {
      commit(types.restoreCollection);
    },
  },
  mutations: {
    [types.checkBoxControl]: (state) => {
      state[types.checkBoxControl] = !state[types.checkBoxControl];
    },
    [types.restoreCollection]: (state) => {
      axios
        .post(`${types.urlGMD}/${types.restoreGmd}`, {
          restore: state[types.tableId],
        })
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.restoreAll]: (state) => {
      // axios
      //   .put(`${types.urlGMD}/${types.restoreGmd}`)
      //   .then((res) => {
      //     state[types.messageGMD].message = res.data;
      //     state[types.tableId] = [];
      //     state[types.checkbox] = {};
      //   })
      //   .catch((err) => (state[types.messageGMD].error = err.data));
      console.log('thats why yo go');
    },
    [types.destroyAll]: (state) => {
      state[types.loadingState] = !state[types.loadingState];
      axios
        .delete(`${types.urlGMD}/${types.destroyMethodGmd}`)
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
          state[types.loadingState] = !state[types.loadingState];
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.destroyCollection]: (state) => {
      axios
        .post(`${types.urlGMD}/${types.destroyMethodCollection}`, {
          delete: state[types.tableId],
        })
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.destroyData]: (state, { id }) => {
      axios
        .delete(`${types.urlGMD}/${id}/${types.destroyMethodGmd}`)
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.restoreSome]: (state, { id }) => {
      axios
        .put(`${types.urlGMD}/${id}/${types.restoreGmd}`)
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.cleanCheckBox]: (state) => {
      state[types.checkbox] = {};
    },
    [types.selectCheckBoxAll]: (state, { key, control }) => {
      state[types.checkbox] = {
        ...state[types.checkbox],
        [key]: control ? true : false,
      };
    },
    [types.getDestroy]: (state, { skip, take }) => {
      state[types.loadingBackdrop] = true;
      axios
        .get(`${types.urlGMD}/${types.deleteMethodGMD}`, {
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
          state[types.getDestroy].result = json.data;
          setTimeout(() => {
            state[types.loadingBackdrop] = false;
            state[types.decision] = false;
          }, 1000);
        })
        .catch((err) => (state[types.getDestroy].error = err));
    },
    [types.checkbox]: (state, payload) => {
      state[types.checkbox] = {
        ...state[types.checkbox],
        [payload]: state[types.checkbox][payload]
          ? !state[types.checkbox][payload]
          : true,
      };
    },
    [types.deleteSomeGMD]: (state) => {
      axios
        .post(`${types.urlGMD}/${types.deleteMethodGMD}`, {
          delete: state[types.tableId],
        })
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.removeTableId]: (state, payload) => {
      const index = state[types.tableId].indexOf(payload);
      if (index > -1) {
        state[types.tableId].splice(index, 1);
      }
    },
    [types.tableId]: (state, payload) => {
      state[types.tableId] = [...state[types.tableId], payload];
    },
    [types.cleanTableId]: (state) => {
      state[types.tableId] = [];
    },
    [types.decision]: (state, payload) => {
      state[types.decision] = payload;
    },
    [types.dialog]: (state, payload) => {
      state[types.dialog] = !state[types.dialog];
      if (payload) {
        state[types.memo] = payload;
      }
      if (state[types.decision]) {
        state[types.memo]();
        state[types.decision] = false;
      }
    },
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
            state[types.decision] = false;
          }, 1000);
        })
        .catch((err) => (state[types.getGMD].error = err));
    },
    [types.DeleteSome]: (state, payload) => {
      axios
        .post(types.methodEventGmd`${types.urlGMD} ${types.deleteMethodGMD}`, {
          delete: payload,
        })
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.postGMD]: (
      state,
      { method, id = undefined, gmd_code, gmd_name }
    ) => {
      state[types.loadingState] = !state[types.loadingState];
      state[types.checkbox] = {};
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
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.deleteGMD]: (state, { id }) => {
      axios
        .delete(types.methodEventGmd`${id} ${types.deleteMethodGMD}`)
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
  },
};
