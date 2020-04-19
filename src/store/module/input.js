export default {
  state: {
    formData: {},
  },
  getters: {
    getFormData: (state) => {
      return state.formData;
    },
  },
  actions: {
    submitForm({ commit }) {
      commit("submitForm");
    },
  },
  mutations: {
    submitForm(state) {
      setTimeout(() => {
        console.log(state.formData);
      }, 500);
    },
    insertInput(state, payload) {
      const key = Object.keys(payload)[0];
      state.formData = {
        ...state.formData,
        [key]: payload[key],
      };
    },
  },
};
