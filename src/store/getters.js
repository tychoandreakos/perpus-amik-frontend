export const table = state => {
  return state.tableMaster[state.tableTypes];
};

export const tableTypes = state => {
  return state.tableTypes;
};

export const dropdownChoice = state => {
  return state.dropdownChoice;
};

export const selectedDropdown = state => {
  return state.selectedDropdown;
};

export const getUpdate = state => {
  return state.getUpdate;
};

export const updateInputState = state => {
  return state.updateInputState;
};
