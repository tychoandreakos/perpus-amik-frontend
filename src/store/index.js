import Vue from "vue";
import Vuex from "vuex";

import * as types from "./types";
import * as mutations from "./mutations";
import * as getters from "./getters";

// modules
import Input from "./module/input";
import Book from "./module/book";
import Api from "./module/API/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Input,
    Book,
    Api,
  },
  state: {
    floatPanel: false,
    getUpdate: "",
    panel: false,
    sidebarState: false,
    showSearch: false,
    editProps: false,
    idInputState: "",
    circulation: {
      title: "Circulation",
      breadcrumbs: ["Circulation"],
    },
    updateInputState: [],
    tableTypes: "",
    dropdownChoice: {},
    tableMaster: {
      [types.masterCOLLECTION]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["Collection Type", "Last Update"],
        sample: [
          {
            id: 1,
            name: "Fiction",
            updated: "2020-02-19",
          },
          {
            id: 2,
            name: "Reference",
            updated: "2020-02-19",
          },
          {
            id: 3,
            name: "Textbook",
            updated: "2020-02-19",
          },
        ],
      },
      [types.masterITEM]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["Item Status Code", "Item Status Name", "Last Update"],
        sample: [
          {
            id: 1,
            code: "MIS",
            name: "Missing",
            updated: "2020-02-19",
          },
          {
            id: 2,
            code: "NL",
            name: "No Loan",
            updated: "2020-02-19",
          },
          {
            id: 3,
            code: "R",
            name: "Repair",
            updated: "2020-02-19",
          },
        ],
      },
      [types.masterSUBJECT]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["Subject Name", "Subject Type", "Last Update"],
        sample: [
          {
            id: 1,
            subject: "Computer",
            type: "Topic",
            updated: "2020-02-19",
          },
          {
            id: 2,
            subject: "Database",
            type: "Topic",
            updated: "2020-02-19",
          },
          {
            id: 3,
            subject: "Corruption",
            type: "Topic",
            updated: "2020-02-19",
          },
          {
            id: 4,
            subject: "Design",
            type: "Topic",
            updated: "2020-02-19",
          },
          {
            id: 5,
            subject: "Development",
            type: "Topic",
            updated: "2020-02-19",
          },
          {
            id: 6,
            subject: "Information",
            type: "Topic",
            updated: "2020-02-19",
          },
        ],
      },
      [types.masterLANGUAGE]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["Language", "Last Update"],
        sample: [
          {
            id: 1,
            name: "English",
            updated: "2020-02-19",
          },
          {
            id: 2,
            name: "Indonesia",
            updated: "2020-02-19",
          },
        ],
      },
      [types.masterPLACE]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["Place Name", "Last Update"],
        sample: [
          {
            id: 1,
            name: "Indianapolis",
            updated: "2020-02-19",
          },
          {
            id: 2,
            name: "London",
            updated: "2020-02-19",
          },
          {
            id: 3,
            name: "New York",
            updated: "2020-02-19",
          },
        ],
      },
      [types.masterLOCATION]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["Location Code", "Location Name", "Last Update"],
        sample: [
          {
            id: 1,
            code: "SL",
            name: "Manisku Library",
            updated: "2020-02-19",
          },
          {
            id: 2,
            code: "XL",
            name: "Manisku Library",
            updated: "2020-02-19",
          },
          {
            id: 3,
            code: "AB",
            name: "Manisku Library",
            updated: "2020-02-19",
          },
        ],
      },
      [types.masterAUTHOR]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["Author Name", "Last Update"],
        sample: [
          {
            id: 1,
            name: "Valade, Janet",
            updated: "2020-02-19",
          },
          {
            id: 2,
            name: "Rosen, Richart",
            updated: "2020-02-19",
          },
          {
            id: 3,
            name: "Woychowsky, Edmond",
            updated: "2020-02-19",
          },
          {
            id: 4,
            name: "Taylor, Arlene G.",
            updated: "2020-02-19",
          },
          {
            id: 5,
            name: "Stueart, Robert D.",
            updated: "2020-02-19",
          },
        ],
      },
      [types.masterGMD]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["GMD CODE", "GMD NAME", "Last Update"],
        sample: [
          {
            id: 1,
            code: "AR",
            name: "Art Original",
            updated: "2020-02-19",
          },
          {
            id: 2,
            code: "CA",
            name: "Cartongraphic Material",
            updated: "2020-02-19",
          },
          {
            id: 3,
            code: "CD",
            name: "CD-ROM",
            updated: "2020-02-19",
          },
          {
            id: 4,
            code: "CH",
            name: "Chart",
            updated: "2020-02-19",
          },
        ],
      },
      [types.masterPUBLISHER]: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["Publisher Name", "Last Update"],
        sample: [
          {
            id: 1,
            name: "Apress",
            updated: "2020-02-19",
          },
          {
            id: 2,
            name: "Jhon Wiley",
            updated: "2020-02-19",
          },
          {
            id: 3,
            name: "OReilly",
            updated: "2020-02-19",
          },
          {
            id: 4,
            name: "SAMS",
            updated: "2020-02-19",
          },
          {
            id: 5,
            name: "Crown Publisher",
            updated: "2020-02-19",
          },
        ],
      },
    },
    selectedDropdown: {},
    inputParams: [],
    countUpdate: 0,
    header: "",
    createInput: [],
    bookHistory: [
      {
        img:
          "https://learning.oreilly.com/library/view/expert-performance-indexing/9781484254646/images/978-1-4842-5464-6_CoverFigure.jpg",
        title:
          "Expert Performance Indexing in SQL Server 2019 Toward Faster Results and Lower Maintenance",
        author: "Jason Strate",
      },
      {
        img: "https://learning.oreilly.com/library/cover/9781492041207/",
        title: "Laravel: Up & Running, 2nd Edition",
        author: "Matt Stauffer",
      },
    ],
  },

  getters,
  mutations,
});
