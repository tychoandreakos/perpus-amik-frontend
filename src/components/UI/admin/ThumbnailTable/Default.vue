<template lang="pug">
    section#table
        table
            thead
                th(v-if="tableProps.enabled && tableProps.enabled.checkbox")
                  div(style="margin-left: .5rem" @click="selectAllHandler")
                    Checkbox(:check="checkBoxControl")
                template(v-if="tableProps.head")
                  template(v-for="(item, i) in tableProps.head")
                      template(v-if="checkingHandler(item)")
                          th(:key="i") {{ item }}
            tbody
              template(v-if="tableProps && tableProps.content")
                  template(v-for="(body, keyBodies) in tableProps.content.result")
                      tr(:key="keyBodies" @click="checkBoxHandler(keyBodies)")
                          td(v-if="tableProps.enabled.checkbox") #[Checkbox(:check="checkbox[keyBodies] || false" @click="checkBoxHandler(keyBodies)")]
                          template(v-for="(item, keyItem) in body")
                              //- for image
                              td(v-if="item.img && enabledImage" :key="keyItem")
                                div.img(:style="{background: 'url('+ item.img_name +')'}" :class="{bibliobigrafi: bibliobigrafiControl}")
                              //- for desc in bibliobigrafi
                              td(v-else-if="item.author && item.title" :key="keyItem")
                                div.desc
                                  h3 {{ item.title }}
                                  span.author(v-for="(author, keyAuthor) in item.author" :key="keyAuthor") {{ author }}
                              td(v-else :key="keyItem") {{ item }}
                          td.action(v-if="tableProps.enabled.action")
                              button(v-if="tableProps.enabled.edit" @click.stop="editHandler(body.id)") #[Icon(icon="pencil")]
                              button(v-if="tableProps.enabled.retrieve" @click.stop="reloadHandler(body.id, $event)") #[Icon(icon="reload")]
                              button(@click.stop="removeHandler(body.id, $event)") #[Icon(icon="trash")]

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
  restoreSome,
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
    bibliobigrafiControl: {
      type: Boolean,
      required: false,
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
      restoreSome: restoreSome,
    }),
    checkingHandler(item) {
      if (!this.enabledImage) {
        return !item.match(/image$/i);
      }

      return true;
    },
    editHandler(id) {
      this.updateMemberData(id);
      this.$router.push({
        name: 'membership.update',
      });
    },
    reloadHandler(id, e) {
      this.messagePrompt(this.msg.restore);
      const parent = e.originalTarget.offsetParent.parentElement;
      this.dialog(() => {
        parent.classList.add('remove');
        setTimeout(() => {
          parent.classList.add('none');
        }, 200);

        setTimeout(() => {
          this.restoreSome({
            id,
          });
        }, 500);
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

        .bibliobigrafi {
          border-radius: 1% !important;
          height: 105px;
          width: 80px;
        }

        .desc {
          text-transform: capitalize;

          h3 {
            color: rgb(44, 44, 44);
            font: {
              family: 'Poppins', sans-serif;
              weight: 500;
              size: 0.9rem;
            }
          }

          .author {
            font: {
              family: 'Nunito', sans-serif;
              weight: 500;
            }
            margin-top: 1rem;
          }

          .author ~ .author:not(:empty):before {
            content: ', ';
          }
        }
      }
    }
  }
}
</style>
