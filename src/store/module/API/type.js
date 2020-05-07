//API
export const getGMD = 'master/GMD/getAPI';
export const postGMD = 'master/GMD/postAPI';
export const deleteGMD = 'master/GMD/deleteAPI';
export const updateGMD = 'master/GMD/updateAPI';
export const messageGMD = 'master/GMD/messageAPI';
export const postMasterAPI = 'master/GMD/postMaster';
export const getType = 'master/GMD/getType';

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

export const urlGMD = 'gmd';
export const deleteMethodGMD = 'delete';
export const editMethodGMD = 'edit';
export const searchGMD = `${urlGMD}/search`;

export const methodEventGmd = (undefined, id, method) => {
  return urlGMD + '/' + id + '/' + method;
};
