<template lang="pug">
    section#table
            thead
                th(v-if="tableProps.enabled && tableProps.enabled.checkbox")
                  div(style="margin-left: .5rem" @click="selectAllHandler")
                    Checkbox(:check="checkBoxControl")
                template(v-if="head")
                  template(v-for="(item, i) in head")
                      template(v-if="enabledImage ? enabledImage : item != 'image'")
                          th(:key="i") {{ item }}
            tbody
              template(v-if="tableProps && tableProps.content")
                  template(v-for="(body, keyBodies) in tableProps.content.result")
                      tr(:key="keyBodies" @click="checkBoxHandler(keyBodies)")
                          td(v-if="tableProps.enabled.checkbox") #[Checkbox(:check="checkbox[keyBodies] || false" @click="checkBoxHandler(keyBodies)")]
                          template(v-for="(item, keyItem) in body")
                              td(v-if="item.img && enabledImage" :key="keyItem")
                                  div.img(:style="{background: 'url('+ item.img_name +')'}")
                              td(v-else-if="!item.img" :key="keyItem") {{ item }}
                          td.action(v-if="tableProps.enabled.action")
                              button(v-if="tableProps.enabled.edit" @click.stop="editHandler(body.id)") #[Icon(icon="pencil")]
                              button(v-if="tableProps.enabled.remove" @click.stop="removeHandler(body.id, $event)") #[Icon(icon="trash")]
                              button(v-if="tableProps.enabled.retrieve" @click.stop="editHandler(body.id)") #[Icon(icon="reload")]
                              button(v-if="tableProps.enabled.destroy" @click.stop="removeHandler(body.id, $event)") #[Icon(icon="trash")]

</template>

<script>
import Icon from 'vue-themify-icons';
import Checkbox from '../Checkbox';

import {
  checkBoxControl,
  checkbox,
  tableId,
  removeTableId,
  cleanTableId,
  cleanCheckBox,
  selectCheckBoxAll,
  msgPrompt,
  messagePrompt,
  dialog,
  destroyData,
  deleteGMD,
  updateMemberData,
} from '../../../../store/module/API/type';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'ThumbnailTable',
  components: {
    Icon,
    Checkbox,
  },
  computed: {
    ...mapGetters({
      checkBoxControl: checkBoxControl,
      checkbox: checkbox,
      msg: msgPrompt,
    }),
  },
  props: {
    tableProps: {
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      setCheckboxAll: checkBoxControl,
      setCheckbox: checkbox,
      tableId: tableId,
      removeTableId: removeTableId,
      cleanTableId: cleanTableId,
      cleanCheckBox: cleanCheckBox,
      selectCheckboxAll: selectCheckBoxAll,
      messagePrompt: messagePrompt,
      dialog: dialog,
    }),
    ...mapActions({
      destroyData: destroyData,
      deleteGMD: deleteGMD,
      updateMemberData: updateMemberData,
    }),
    editHandler(id) {
      this.updateMemberData(id);
      this.$router.push({
        name: 'membership.update',
      });
    },
    removeHandler(id, e) {
      this.messagePrompt(this.msg.delete);
      const parent = e.originalTarget.offsetParent.parentElement;
      this.dialog(() => {
        parent.classList.add('remove');
        setTimeout(() => {
          parent.classList.add('none');
        }, 200);

        setTimeout(() => {
          if (this.tableProps.enabled.destroy) {
            this.destroyData({
              id,
            });
          } else {
            this.deleteGMD({
              id,
            });
          }
        }, 500);
      });
    },
    selectAllHandler() {
      const limit = this.tableProps.content.dataCount;
      this.setCheckboxAll();
      if (this.checkBoxControl) {
        for (let i = 0; i < limit; i++) {
          let control = this.checkBoxControl;
          this.selectCheckboxAll({
            key: i,
            control,
          });

          try {
            this.tableId(this.tableProps.content.result[i].id);
          } catch (err) {
            // error
          }
        }
      } else {
        this.cleanCheckBox();
        this.cleanTableId();
      }
    },
    checkBoxHandler(key) {
      this.setCheckbox(key);
      const id = this.tableProps.content.result[key].id;
      this.checkbox[key] ? this.tableId(id) : this.removeTableId(id);
    },
  },
  data() {
    return {
      head: [
        'member image',
        'ID',
        'name',
        'membership type',
        'email',
        'last updated',
        'action',
      ],
      enabledImage: true,
    };
  },
};
</script>

<style lang="scss">
#table {
  img {
    width: 45%;
  }

  tbody {
    tr {
      td {
        .img {
          border-radius: 50%;
          width: 75px;
          height: 75px;
          background-position: center !important;
          background-size: cover !important;
          margin: auto;
        }
      }
    }
  }
}
</style>
