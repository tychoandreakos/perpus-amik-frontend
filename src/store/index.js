import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    bookHistory: [
      {
        img:
          "https://learning.oreilly.com/library/view/expert-performance-indexing/9781484254646/images/978-1-4842-5464-6_CoverFigure.jpg",
        title:
          "Expert Performance Indexing in SQL Server 2019 Toward Faster Results and Lower Maintenance",
        author: "Jason Strate"
      },
      {
        img: "https://learning.oreilly.com/library/cover/9781492041207/",
        title: "Laravel: Up & Running, 2nd Edition",
        author: "Matt Stauffer"
      }
    ]
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
