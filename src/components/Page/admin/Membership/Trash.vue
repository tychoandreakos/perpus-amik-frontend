<template lang="pug">
    div#recycle-bin
        HeaderComponent(:title="title" :breadcrumbsHeader="breadcrumbs")
        h3.info {{ info }}
        PanelActionComponent(
            v-if="database.content"
            :title="title"
            :restore="database.content.dataCount > 0"
            :settings="panelAction"
            :search="search"
            :total="total"
            :breadcrumbsHeader="breadcrumbs"
            :button="button"
             @count="count"
        )
        TableComponent(
            :tableProps="database"
            :disabledCheck="true"
            delete="we dont"
        )
</template>

<script>
import HeaderComponent from '../../../UI/admin/Header';
import PanelActionComponent from '../../../UI/admin/PanelAction';
import TableComponent from '../../../UI/admin/ThumbnailTable/Default';

import { updateMemberData } from '../../../../store/module/API/type';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TrashMembership',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent,
  },
  methods: {
    count(e) {},
  },
  computed: {
    ...mapGetters({
      getTrash: updateMemberData,
    }),
    database() {
      return {
        enabledImage: true,
        enabled: {
          checkbox: true,
          edit: false,
          remove: false,
          action: true,
          retrieve: true,
          destroy: true,
        },
        content: this.getTrash.result.data,
      };
    },
    total() {
      return this.database.content.dataCount || 0;
    },
  },
  data() {
    return {
      search: {
        placeholder: 'Search Member',
      },
      title: 'Recycle Bin',
      breadcrumbs: ['data list'],
      info:
        'Themify Icons is a complete set of icons for use in web design and apps, consisting of 320+ pixel-perfect, hand-crafted icons that draw inspiration from Apple iOS 7 - available to the public.',
      panelAction: {
        detail: false,
        edit: false,
        delete: false,
        recycle: false,
        setting: true,
        destroy: true,
        restore: true,
        restoreAll: true,
      },
      button: {
        title: 'Clean / Delete All Data',
        icon: 'trash',
        type: 'delete',
      },
    };
  },
};
</script>
