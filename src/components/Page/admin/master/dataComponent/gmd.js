export default {
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
};
