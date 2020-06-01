//API
export const getGMD = 'master/GMD/getAPI';
export const postGMD = 'master/GMD/postAPI';
export const deleteGMD = 'master/GMD/deleteAPI';
export const updateGMD = 'master/GMD/updateAPI';
export const messageGMD = 'master/GMD/messageAPI';
export const postMasterAPI = 'master/GMD/postMaster';
export const getType = 'master/GMD/getType';
export const deleteSomeGMD = 'master/GMD/deleteSomeGMD';
export const getDestroy = 'master/GMD/getDestroy';
export const restoreSome = 'master/gmd/restoreSome';
export const updateOrEditGmd = 'master/gmd/updateOrEditGMD';
export const getDetailsGmd = 'master/gmd/getDetailsGmd';
export const updateSomeGmd = 'master/gmd/updateSomeGMD';

export const createPost = 'master/GMD/CREATE';
export const updatePOST = 'master/GMD/UPDATE';
export const DeleteSome = 'master/DELETESOME';
export const UpdateSome = 'master/UPDATESOME';
export const tableId = 'master/TABLEID';
export const cleanTableId = 'master/CLEANTABLEID';
export const IDPOST = 'master/IDPOST';
export const searchPOST = 'master/SEARCHPOST';
export const loadingState = 'master/LOADINGSTATE';
export const loadingBackdrop = 'master/LOADINGBACKDROP';
export const dialog = 'master/dialog';
export const decision = 'master/decision';
export const dialogValue = 'master/VALUE';
export const memo = 'master/MEMO';
export const removeTableId = 'master/removeTableId';
export const checkbox = 'master/checkbox';
export const cleanCheckBox = 'master/cleanCheckBox';
export const selectCheckBoxAll = 'master/selectCheckBoxAll';
export const destroyData = 'master/gmd/destroy';
export const destroyCollection = 'master/gmd/destroyCollection';
export const destroyAll = 'master/gmd/destroyAllCollection';
export const restoreCollection = 'master/gmd/restoreCollection';
export const checkBoxControl = 'master/gmd/checkBoxControl';
export const restoreAll = 'master/gmd/restoreAll';

export const urlGMD = 'gmd';
export const deleteMethodGMD = 'delete';
export const editMethodGMD = 'edit';
export const searchGMD = `${urlGMD}/search`;
export const restoreGmd = 'restore';
export const destroyMethodGmd = 'destroy';
export const destroyMethodCollection = 'destroy-collections';
export const destroyAllMethod = 'delete-all';
export const detailsMethod = 'details';
export const updateMethod = 'update';

export const methodEventGmd = (undefined, id, method) => {
  return urlGMD + '/' + id + '/' + method;
};
