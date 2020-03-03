export const table = state => {
  return state.tableMaster[state.tableTypes];
};

export const tableTypes = state => {
  return state.tableTypes;
};
