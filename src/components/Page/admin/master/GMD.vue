<template lang="pug">
  section#gmd
    HeaderComponent(:title="title" :breadcrumbsHeader="breadcrumbs")
    PanelActionComponent(:title="title" 
    :search="search" :breadcrumbsHeader="breadcrumbs" @count="count" :total="total" :button="button")
    TableComponent(:tableProps="database")
    
</template>
<script>
import HeaderComponent from "../../../UI/admin/Header";
import PanelActionComponent from "../../../UI/admin/PanelAction";
import TableComponent from "../../../UI/admin/TableAdmin";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import { masterGMD } from "../../../../store/types";

import axios from "../../../../api/axios";

import * as types from "../../../../store/module/API/type";

export default {
  name: "GMD",
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent,
  },
  computed: {
    ...mapState(["resultInput"]),
    ...mapGetters({
      view: types.getGMD,
    }),
    database() {
      return {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["GMD CODE", "GMD NAME", "Last Update"],
        field: ["gmd_code", "gmd_name", "updated_at"],
        content: this.view.result,
      };
    },
    total() {
      return this.database.content.dataCount || 0;
    },
  },
  methods: {
    ...mapMutations([
      "setCountUpdateDefault",
      "setHeader",
      "setCreateInput",
      "setDefaultParams",
      "setTableTypes",
      "setGetUpdate",
      "setClearEditProps",
    ]),
    ...mapActions(["getGmd", types.getGMD]),
    count(e) {
      this[types.getGMD]({
        skip: e,
        take: 2,
      });
    },
  },
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.button.title);
    this.setCreateInput(this.createProp);
    this.setDefaultParams();
    this.setTableTypes(masterGMD);
    this.setGetUpdate(masterGMD);
    this.setClearEditProps();

    //get data from API
    this[types.getGMD]({
      skip: 0,
      take: 2,
    });
  },

  data() {
    return {
      breadcrumbs: ["Data List"],
      title: "GMD ( General Material Designation )",
      button: {
        title: "Add New GMD",
        icon: "plus",
      },
      createProp: [
        {
          label: "GMD Code",
          id: "code",
          placeholder: "Please type a GMD Code",
          type: "text",
        },
        {
          label: "GMD Name",
          id: "name",
          placeholder: "Please type a GMD Name",
          type: "text",
        },
      ],
      search: {
        placeholder: "Search GMD",
      },
    };
  },
};
</script>
<style lang="scss">
#gmd {
  width: 100%;
  height: 100%;
}
</style>
