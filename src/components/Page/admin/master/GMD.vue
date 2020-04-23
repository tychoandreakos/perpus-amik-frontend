<template lang="pug">
  section#gmd
    HeaderComponent(:title="title" :breadcrumbsHeader="breadcrumbs")
    PanelActionComponent(:title="title" :breadcrumbsHeader="breadcrumbs" @count="count" :total="database.content.dataCount")
    TableComponent(:tableProps="database")
</template>
<script>
import HeaderComponent from "../../../UI/admin/Header";
import PanelActionComponent from "../../../UI/admin/PanelAction";
import TableComponent from "../../../UI/admin/TableAdmin";
import { mapState, mapMutations } from "vuex";

import { masterGMD } from "../../../../store/types";

import axios from "../../../../api/axios";

export default {
  name: "GMD",
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent,
  },
  computed: {
    ...mapState(["resultInput"]),
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
    count(e) {
      this.getData(e, 2);
    },
    getData(skip, take) {
      axios
        .get("gmd", {
          params: {
            skip,
            take,
          },
        })
        .then((res) => res.data)
        .then((json) => (this.database.content = json.data))
        .catch((err) => console.log(err));
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
    this.getData(0, 2);
  },

  data() {
    return {
      breadcrumbs: ["Data List"],
      title: "GMD ( General Material Designation )",
      button: {
        title: "Add New GMD",
        icon: "plus",
      },
      database: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ["GMD CODE", "GMD NAME", "Last Update"],
        field: ["gmd_code", "gmd_name", "updated_at"],
        content: {},
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
