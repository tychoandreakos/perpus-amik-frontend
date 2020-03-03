export const setSidebar = state => {
  state.sidebarState = !state.sidebarState;
};
export const setTableTypes = (state, payload) => {
  state.tableTypes = payload;
};
export const setSearch = state => {
  state.showSearch = !state.showSearch;
};
export const setCirculation = (state, payload) => {
  state.circulation = {
    ...payload
  };
};
export const setPanel = state => {
  state.panel = !state.panel;
};
export const setCreateInput = (state, payload) => {
  state.createInput = [...payload];
};
export const setCountUpdate = state => {
  state.countUpdate += 1;
};
export const setGetUpdate = (state, payload) => {
  state.getUpdate = payload;
};
export const setCountUpdateDefault = state => {
  state.countUpdate = 0;
};
export const setHeader = (state, payload) => {
  state.header = payload;
};
export const setResetDropdown = (state, payload) => {
  state.selectedDropdown = {
    ...payload
  };
};
export const setSelectedDropdown = (state, payload) => {
  state.selectedDropdown = {
    ...state.selectedDropdown,
    ...payload
  };
};
export const setInputParams = (state, payload) => {
  state.inputParams.push(payload);
};
export const setDefaultParams = state => {
  state.inputParams = [];
  state.selectedDropdown = {};
};
export const setDropdownChoice = (state, payload) => {
  state.dropdownChoice = {
    ...payload
  };
};
export const setDropdownVal = (state, payload) => {
  state.selectedDropdown = {
    ...payload
  };
};
export const setTable = (state, payload) => {
  const { title, data } = payload;
  state.tableMaster[title].sample.push(data);
};
export const setUpdateInputState = (state, payload) => {
  const temporaryInput = [];
  for (let key in payload) {
    if (key !== 'updated') {
      temporaryInput.push(payload[key]);
    }
  }

  state.updateInputState = [...temporaryInput];
};
export const setClearupdateInputState = state => {
  state.updateInputState = [];
};
