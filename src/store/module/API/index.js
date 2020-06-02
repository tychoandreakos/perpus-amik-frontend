import axios from './axios';
import * as types from './type';

import { name } from '../../../routes/index';

export default {
  state: {
    [types.dataComponent]: {
      author: [
        {
          panelAction: {
            detail: false,
            edit: true,
            delete: true,
            recycle: true,
            setting: true,
            destroy: false,
            restore: false,
            restoreAll: false,
          },
          breadcrumbs: ['Data List'],
          title: 'Author',
          button: {
            title: 'Add New Author',
            icon: 'plus',
            type: 'add',
          },
          createProp: [
            {
              label: 'Author Name',
              id: 'name',
              placeholder: 'Please type a Author Name',
              type: 'text',
            },
          ],
          search: {
            placeholder: 'Search Author',
          },
        },
        {
          enabled: {
            checkbox: true,
            edit: true,
            remove: true,
            action: true,
            retrieve: false,
            destroy: false,
          },
          title: ['Name Author', 'Last Update'],
          field: ['name', 'updated_at'],
        },
      ],
      publisher: [
        {
          panelAction: {
            detail: false,
            edit: true,
            delete: true,
            recycle: true,
            setting: true,
            destroy: false,
            restore: false,
            restoreAll: false,
          },
          breadcrumbs: ['Data List'],
          title: 'Publisher',
          button: {
            title: 'Add New Publisher',
            icon: 'plus',
            type: 'add',
          },
          createProp: [
            {
              label: 'Publisher Name',
              id: 'name',
              placeholder: 'Please type a Publisher Name',
              type: 'text',
            },
          ],
          search: {
            placeholder: 'Search Publisher',
          },
        },
        {
          enabled: {
            checkbox: true,
            edit: true,
            remove: true,
            action: true,
            retrieve: false,
            destroy: false,
          },
          title: ['Name Publisher', 'Last Update'],
          field: ['name', 'updated_at'],
        },
      ],
      gmd: [
        {
          panelAction: {
            detail: false,
            edit: true,
            delete: true,
            recycle: true,
            setting: true,
            destroy: false,
            restore: false,
            restoreAll: false,
          },
          breadcrumbs: ['Data List'],
          title: 'GMD ( General Material Designation )',
          button: {
            title: 'Add New GMD',
            icon: 'plus',
            type: 'add',
          },
          createProp: [
            {
              label: 'GMD Code',
              id: 'gmd_code',
              placeholder: 'Please type a GMD Code',
              type: 'text',
            },
            {
              label: 'GMD Name',
              id: 'gmd_name',
              placeholder: 'Please type a GMD Name',
              type: 'text',
            },
          ],
          search: {
            placeholder: 'Search GMD',
          },
        },
        {
          enabled: {
            checkbox: true,
            edit: true,
            remove: true,
            action: true,
            retrieve: false,
            destroy: false,
          },
          title: ['GMD CODE', 'GMD NAME', 'Last Update'],
          field: ['gmd_code', 'gmd_name', 'updated_at'],
        },
      ],
    },
    [types.msgPrompt]: {
      delete:
        'are you sure want to delete? anyway when your delete that data the data still in the recyle bin',
      deleteAll:
        'are you sure want delete all the data? anyway when your delete that data the data still in the recyle bin',
      update: 'are you sure want to update data?',
      updateAll: 'are you sure want to update all the data?',
      save: 'are you sure want to save data?',
      restore: 'are you sure want to restore data?',
      restoreAll: 'are you sure want to restore all data?',
      destroy: 'are you sure want to delete? The data cannot be restored.',
      destroyAll:
        'are you sure want to delete all? The data cannot be restored.',
    },
    [types.titleComponent]: '',
    [types.messagePrompt]: '',
    [types.getDetailsGmd]: {
      result: [],
      error: [],
    },
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
    [types.updateOrEditGmd]: [],
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
    [types.dataComponent]: (state) => {
      return state[types.dataComponent];
    },
    [types.titleComponent]: (state) => {
      return state[types.titleComponent];
    },
    [types.msgPrompt]: (state) => {
      return state[types.msgPrompt];
    },
    [types.messagePrompt]: (state) => {
      return state[types.messagePrompt];
    },
    [types.getDetailsGmd]: (state) => {
      return state[types.getDetailsGmd];
    },
    [types.tableId]: (state) => {
      return state[types.tableId];
    },
    [types.checkBoxControl]: (state) => {
      return state[types.checkBoxControl];
    },
    [types.updateOrEditGmd]: (state) => {
      return state[types.updateOrEditGmd];
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
    [types.getDetailsGmd]: ({ commit }) => {
      commit(types.getDetailsGmd);
    },
    [types.updateSomeGmd]: ({ commit }, payload) => {
      commit(types.updateSomeGmd, payload);
    },
  },
  mutations: {
    [types.dataComponent]: (state, payload) => {
      state[types.dataComponent] = payload;
    },
    [types.titleComponent]: (state, payload) => {
      state[types.titleComponent] = payload;
    },
    [types.messagePrompt]: (state, payload) => {
      state[types.messagePrompt] = payload;
    },
    [types.updateSomeGmd]: (state, payload) => {
      axios
        .post(
          `${state[types.titleComponent].toLowerCase()}/${types.updateMethod}`,
          {
            updates: payload,
          }
        )
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.getDetailsGmd]: (state) => {
      axios
        .post(
          `${state[types.titleComponent].toLowerCase()}/${types.detailsMethod}`,
          {
            detail: state[types.tableId],
          }
        )
        .then((res) => {
          state[types.getDetailsGmd].result = res.data;
        })
        .catch((err) => (state[types.getDetailsGmd].error = err.data));
    },
    [types.updateOrEditGmd]: (state, payload) => {
      if (state[types.updateOrEditGmd].length < 1) {
        state[types.updateOrEditGmd] = [...payload];
      }
    },
    [types.checkBoxControl]: (state) => {
      state[types.checkBoxControl] = !state[types.checkBoxControl];
    },
    [types.restoreCollection]: (state) => {
      axios
        .post(
          `${state[types.titleComponent].toLowerCase()}/${types.restoreGmd}`,
          {
            restore: state[types.tableId],
          }
        )
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.restoreAll]: (state) => {
      axios
        .put(`${state[types.titleComponent].toLowerCase()}/${types.restoreGmd}`)
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.destroyAll]: (state) => {
      state[types.loadingState] = !state[types.loadingState];
      axios
        .delete(
          `${state[types.titleComponent].toLowerCase()}/${
            types.destroyMethodGmd
          }`
        )
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
        .post(
          `${state[types.titleComponent].toLowerCase()}/${
            types.destroyMethodCollection
          }`,
          {
            delete: state[types.tableId],
          }
        )
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
        .delete(
          `${state[types.titleComponent].toLowerCase()}/${id}/${
            types.destroyMethodGmd
          }`
        )
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
        .put(
          `${state[types.titleComponent].toLowerCase()}/${id}/${
            types.restoreGmd
          }`
        )
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
      state[types.tableId] = [];
      state[types.checkBoxControl] = false;
      state[types.getDetailsGmd] = {
        result: [],
        error: [],
      };
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
        .get(
          `${state[types.titleComponent].toLowerCase()}/${
            types.deleteMethodGMD
          }`,
          {
            params: {
              skip,
              take,
            },
          }
        )
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
        .post(
          `${state[types.titleComponent].toLowerCase()}/${
            types.deleteMethodGMD
          }`,
          {
            delete: state[types.tableId],
          }
        )
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.tableId] = [];
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
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
        .get(state[types.titleComponent].toLowerCase().toLowerCase(), {
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
        .post(
          `${state[types.titleComponent].toLowerCase()}/${id}/${
            types.deleteMethodGMD
          }`
        )
        // .post(
        //   types.methodEventGmd`${state[types.titleComponent].toLowerCase()} ${types.deleteMethodGMD}`,
        //   {
        //     delete: payload,
        //   }
        // )
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
    [types.postGMD]: (state, payload) => {
      const id = payload.id ? payload.id : undefined;
      state[types.loadingState] = !state[types.loadingState];
      state[types.checkbox] = {};
      let data;
      const key = Object.keys(payload);
      let tempData = {};
      for (let i = 0; i < key.length; i++) {
        if (key[i] != 'method' && key[i] != 'id') {
          tempData = {
            ...tempData,
            [key[i]]: payload[key[i]],
          };
        }
      }
      if (payload.method == types.createPost) {
        data = axios.post(state[types.titleComponent].toLowerCase(), {
          ...tempData,
        });
      } else if (payload.method == types.updatePOST) {
        data = axios.put(
          `${state[types.titleComponent].toLowerCase()}/${id}/${
            types.editMethodGMD
          }`,
          {
            ...tempData,
          }
        );
        // .put(types.methodEventGmd`${id} ${types.editMethodGMD}`, {
        //   ...tempData,
        // });
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
        .delete(
          `${state[types.titleComponent].toLowerCase()}/${id}/${
            types.deleteMethodGMD
          }`
        )
        // .delete(types.methodEventGmd`${id} ${types.deleteMethodGMD}`)
        .then((res) => {
          state[types.messageGMD].message = res.data;
          state[types.checkbox] = {};
          state[types.checkBoxControl] = false;
        })
        .catch((err) => (state[types.messageGMD].error = err.data));
    },
  },
};
