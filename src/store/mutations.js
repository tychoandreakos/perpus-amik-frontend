export const setSidebar = (state) => {
  state.sidebarState = !state.sidebarState;
};
export const setTableTypes = (state, payload) => {
  state.tableTypes = payload;
};
export const setSearch = (state) => {
  state.showSearch = !state.showSearch;
};
export const setCirculation = (state, payload) => {
  state.circulation = {
    ...payload,
  };
};
export const setFloatPanel = (state) => {
  state.floatPanel = !state.floatPanel;
};
export const setPanel = (state) => {
  state.panel = !state.panel;
};
export const setCreateInput = (state, payload) => {
  state.createInput = [...payload];
};
export const setCountUpdate = (state) => {
  state.countUpdate += 1;
};
export const setGetUpdate = (state, payload) => {
  state.getUpdate = payload;
};
export const setCountUpdateAlternate = (state) => {
  state.countUpdate = 1;
};
export const setCountUpdateDefault = (state) => {
  state.countUpdate = 0;
};
export const setHeader = (state, payload) => {
  state.header = payload;
};
export const setResetDropdown = (state, payload) => {
  state.selectedDropdown = {
    ...payload,
  };
};
export const setSelectedDropdown = (state, payload) => {
  console.log(payload);
  state.selectedDropdown = {
    ...state.selectedDropdown,
    ...payload,
  };
};
export const setInputParams = (state, payload) => {
  state.inputParams.push(payload);
};
export const setDefaultParams = (state) => {
  state.inputParams = [];
  state.selectedDropdown = {};
};
export const setDropdownChoice = (state, payload) => {
  state.dropdownChoice = {
    ...payload,
  };
};
export const setDropdownVal = (state, payload) => {
  state.selectedDropdown = {
    ...payload,
  };
};
export const setTable = (state, payload) => {
  const { title, data } = payload;
  console.log('this from setTable', payload);
  state.tableMaster[title].sample.unshift(data);
};
export const setUpdateInputState = (state, payload) => {
  const temporaryInput = [];
  for (let key in payload) {
    if (key !== 'id') {
      temporaryInput.push(payload[key]);
    }
  }

  state.idInputState = payload.id;
  state.updateInputState = [...temporaryInput];
};
export const setClearupdateInputState = (state) => {
  state.updateInputState = [];
};

export const setEditProps = (state) => {
  state.editProps = true;
};

export const setClearEditProps = (state) => {
  state.editProps = false;
};

export const updateMaster = (state, payload) => {
  state.tableMaster[payload.key].sample.find((item) => {
    if (item.id == payload.id) {
      for (let key in payload.data) {
        item[key] = payload.data[key];
      }
    }
  });
};

export const deleteMaster = (state, payload) => {
  let newItem = [];
  state.tableMaster[payload.key].sample.find((item) => {
    if (item.id != payload.id) {
      newItem.push(item);
    }
  });

  state.tableMaster[payload.key].sample = [...newItem];
};
