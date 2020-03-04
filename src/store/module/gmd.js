const state = {
  tableMaster: {
    subject: {
      enabled: {
        checkbox: true,
        edit: true,
        remove: true,
        action: true
      },
      title: ['Subject Name', 'Subject Type', 'Last Update'],
      sample: [
        {
          name: 'Computer',
          type: 'Topic',
          updated: '2020-02-19'
        },
        {
          name: 'Database',
          type: 'Topic',
          updated: '2020-02-19'
        },
        {
          name: 'Corruption',
          type: 'Topic',
          updated: '2020-02-19'
        },
        {
          name: 'Design',
          type: 'Topic',
          updated: '2020-02-19'
        },
        {
          name: 'Development',
          type: 'Topic',
          updated: '2020-02-19'
        },
        {
          name: 'Information',
          type: 'Topic',
          updated: '2020-02-19'
        }
      ]
    },
    language: {
      enabled: {
        checkbox: true,
        edit: true,
        remove: true,
        action: true
      },
      title: ['Language', 'Last Update'],
      sample: [
        {
          name: 'English',
          updated: '2020-02-19'
        },
        {
          name: 'Indonesia',
          updated: '2020-02-19'
        }
      ]
    },
    place: {
      enabled: {
        checkbox: true,
        edit: true,
        remove: true,
        action: true
      },
      title: ['Place Name', 'Last Update'],
      sample: [
        {
          name: 'Indianapolis',
          updated: '2020-02-19'
        },
        {
          name: 'London',
          updated: '2020-02-19'
        },
        {
          name: 'New York',
          updated: '2020-02-19'
        }
      ]
    },
    location: {
      enabled: {
        checkbox: true,
        edit: true,
        remove: true,
        action: true
      },
      title: ['Location Code', 'Location Name', 'Last Update'],
      sample: [
        {
          code: 'SL',
          name: 'Manisku Library',
          updated: '2020-02-19'
        },
        {
          code: 'XL',
          name: 'Manisku Library',
          updated: '2020-02-19'
        },
        {
          code: 'AB',
          name: 'Manisku Library',
          updated: '2020-02-19'
        }
      ]
    },
    author: {
      enabled: {
        checkbox: true,
        edit: true,
        remove: true,
        action: true
      },
      title: ['Author Name', 'Last Update'],
      sample: [
        {
          name: 'Valade, Janet',
          updated: '2020-02-19'
        },
        {
          name: 'Rosen, Richart',
          updated: '2020-02-19'
        },
        {
          name: 'Woychowsky, Edmond',
          updated: '2020-02-19'
        },
        {
          name: 'Taylor, Arlene G.',
          updated: '2020-02-19'
        },
        {
          name: 'Stueart, Robert D.',
          updated: '2020-02-19'
        }
      ]
    },
    gmd: {
      enabled: {
        checkbox: true,
        edit: true,
        remove: true,
        action: true
      },
      title: ['GMD CODE', 'GMD NAME', 'Last Update'],
      sample: [
        {
          code: 'AR',
          name: 'Art Original',
          updated: '2020-02-19'
        },
        {
          code: 'CA',
          name: 'Cartongraphic Material',
          updated: '2020-02-19'
        },
        {
          code: 'CD',
          name: 'CD-ROM',
          updated: '2020-02-19'
        },
        {
          code: 'CH',
          name: 'Chart',
          updated: '2020-02-19'
        }
      ]
    },
    publisher: {
      enabled: {
        checkbox: true,
        edit: true,
        remove: true,
        action: true
      },
      title: ['Publisher Name', 'Last Update'],
      sample: [
        {
          name: 'Apress',
          updated: '2020-02-19'
        },
        {
          name: 'Jhon Wiley',
          updated: '2020-02-19'
        },
        {
          name: 'OReilly',
          updated: '2020-02-19'
        },
        {
          name: 'SAMS',
          updated: '2020-02-19'
        },
        {
          name: 'Crown Publisher',
          updated: '2020-02-19'
        }
      ]
    }
  }
};

export default {
  state
};
