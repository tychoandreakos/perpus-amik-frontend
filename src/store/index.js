import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    panel: false,
    sidebarState: false,
    showSearch: false,
    circulation: {
      title: 'Circulation',
      breadcrumbs: ['Circulation']
    },
    tableMaster: {
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
    },
    selectedDropdown: '',
    inputParams: [],
    countUpdate: 0,
    header: '',
    createInput: [],
    book: [
      {
        titleBook: {
          href: '#',
          title: 'Price and Value: A Guide to Equity Market Valuation Metrics'
        },
        imgBook: {
          href: '#',
          img: 'https://learning.oreilly.com/library/cover/9781484255520/'
        },
        rating: 5,
        authorBook: {
          href: '#',
          author: 'George Calhoun'
        },
        description:
          'Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.'
      },
      {
        titleBook: {
          href: '#',
          title:
            'Game Development with GameMaker Studio 2: Make Your Own Games with GameMaker Language'
        },
        rating: 2,
        imgBook: {
          href: '#',
          img: 'https://learning.oreilly.com/library/cover/9781484250105/'
        },
        authorBook: {
          href: '#',
          author: 'Sebastiano M. Cossu'
        },
        description:
          'Create games from start to finish while learning game design and programming principles using the GameMaker Studio 2 game engine and GameMaker Language (GML).'
      },
      {
        titleBook: {
          href: '#',
          title:
            'Pro Spring Security: Securing Spring Framework 5 and Boot 2-based Java Applications'
        },
        imgBook: {
          href: '#',
          img: 'https://learning.oreilly.com/library/cover/9781484250525/'
        },
        rating: 3,
        authorBook: {
          href: '#',
          author: ['Massimo Nardone', 'Carlo Scarioni']
        },
        description:
          'Build and deploy secure Spring Framework and Spring Boot-based enterprise Java applications with the Spring Security Framework. This book explores a comprehensive set of functionalities to implement industry-standard authentication and authorization mechanisms for Java applications.'
      },
      {
        titleBook: {
          href: '#',
          title: 'Clean Ruby: A Guide to Crafting Better Code for Rubyists'
        },
        rating: 0,
        imgBook: {
          href: '#',
          img: 'https://learning.oreilly.com/library/cover/9781484255469/'
        },
        authorBook: {
          href: '#',
          author: 'Carleton DiLeo'
        },
        description:
          'Learn how to make better decisions and write cleaner Ruby code. This book shows you how to avoid messy code that is hard to test and which cripples productivity. Author Carleton DiLeo shares hard-learned lessons gained from years of experience across numerous codebases both large and small. Each chapter covers the topics you need to know to make better decisions and optimize your productivity. Many books will tell you how to do something; this book will tell you why you should do it. Start writing code you love.'
      },
      {
        titleBook: {
          href: '#',
          title:
            'Query Store for SQL Server 2019: Identify and Fix Poorly Performing Queries'
        },
        rating: 0,
        imgBook: {
          href: '#',
          img: 'https://learning.oreilly.com/library/cover/9781484250044/'
        },
        authorBook: {
          href: '#',
          author: ['Tracy Boggiano', 'Grant Fritchey']
        },
        description:
          'Apply the new Query Store feature to identify and fix poorly performing queries in SQL Server.'
      },
      {
        titleBook: {
          href: '#',
          title:
            'Building Scalable PHP Web Applications Using the Cloud: A Simple Guide to Programming and Administering Cloud-Based Applications'
        },
        rating: 3,
        imgBook: {
          href: '#',
          img: 'https://learning.oreilly.com/library/cover/9781484252123/'
        },
        authorBook: {
          href: '#',
          author: 'Jonathan Bartlett'
        },
        description:
          'Eliminate the guesswork involved in writing and deploying a cloud application. This step-by-step guide uses PHP to minimize the complexity of the code and setup, but the tools and techniques can be applied on any platform using any language. Everything that you need to jumpstart your application on the cloud is right here.'
      },
      {
        titleBook: {
          href: '#',
          title:
            'Hands-on Azure Boards : Configuring and Customizing Process Workflows in Azure DevOps Services'
        },
        rating: 1,
        imgBook: {
          href: '#',
          img: 'https://learning.oreilly.com/library/cover/9781484250464/'
        },
        authorBook: {
          href: '#',
          author: ['Jonathan Bartlett', 'Chaminda Chandrasekara']
        },
        description:
          'Understand and explore the features and management of Azure Boards with this book, which also covers Azure Boards configuration and advanced administration. This book starts by setting up projects with Azure DevOps and gives an overview of Azure Boards and its features. You will then learn to set up team projects and how to effectively use Azure Boards to plan and execute work. '
      }
    ],
    bookHistory: [
      {
        img:
          'https://learning.oreilly.com/library/view/expert-performance-indexing/9781484254646/images/978-1-4842-5464-6_CoverFigure.jpg',
        title:
          'Expert Performance Indexing in SQL Server 2019 Toward Faster Results and Lower Maintenance',
        author: 'Jason Strate'
      },
      {
        img: 'https://learning.oreilly.com/library/cover/9781492041207/',
        title: 'Laravel: Up & Running, 2nd Edition',
        author: 'Matt Stauffer'
      }
    ]
  },

  mutations: {
    setSidebar(state) {
      state.sidebarState = !state.sidebarState;
    },
    setSearch(state) {
      state.showSearch = !state.showSearch;
    },
    setCirculation(state, payload) {
      state.circulation = {
        ...payload
      };
    },
    setPanel(state) {
      state.panel = !state.panel;
    },
    setCreateInput(state, payload) {
      state.createInput = [...payload];
    },
    setCountUpdate(state) {
      state.countUpdate += 1;
    },
    setCountUpdateDefault(state) {
      state.countUpdate = 0;
    },
    setHeader(state, payload) {
      state.header = payload;
    },
    setSelectedDropdown(state, payload) {
      state.selectedDropdown = payload;
    },
    setInputParams(state, payload) {
      state.inputParams.push(payload);
    },
    setDefaultParams(state) {
      state.inputParams = [];
    },
    setTable(state, payload) {
      const { title, data } = payload;
      state.tableMaster[title].sample.push(data);
    }
  }

  // mutations: {
  //   setProducts(state, products) {
  //     state.products = products;
  //   }
  // },

  // actions: {
  //   setProduct({ commit }, products) {
  //     commit("setProducts", products);
  //   }
  // },

  // getters: {
  //   getProducts(state) {
  //     return [...state.products];
  //   }
  // }
});
