<template lang="pug">
  section#dropdown
    div.dropdown-action(@click="dropdown = !dropdown")
      span {{ action.title }}
      Icon(:icon="action.icon")
      transition(name="fade")
        ul.dropdown-list(v-if="dropdown")
          template(v-for="meta in action.dropdownMeta")
            li(:class="meta.disabled ? 'disabled' : ''" @click="dropdownHandler(meta.id, meta.disabled)" :key="meta.id" v-if="meta")
              Icon(:icon="meta.icon")
              span {{ meta.title }}
    div.backdrop(@click="dropdown = !dropdown")
</template>
<script>
import Icon from 'vue-themify-icons';
import {
  deleteSomeGMD,
  dialog,
  checkbox,
  destroyCollection,
  restoreAll,
  restoreCollection,
} from '../../../store/module/API/type';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'DropdownAdmin',
  components: {
    Icon,
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      checkbox: checkbox,
    }),
    action() {
      return {
        title: 'Actions',
        icon: 'angle-down',
        dropdownMeta: [
          !this.settings.detail
            ? undefined
            : {
                id: 1,
                title: 'See Detail',
                icon: 'eye',
                disabled: false,
              },
          !this.settings.edit
            ? undefined
            : {
                id: 2,
                title: 'Edit / Update',
                icon: 'pencil',
                disabled: false,
              },
          !this.settings.delete
            ? undefined
            : {
                id: 3,
                title: 'Delete',
                icon: 'cut',
                disabled: false,
              },

          !this.settings.recycle
            ? undefined
            : {
                id: 4,
                title: 'Recycle Bin',
                icon: 'trash',
                disabled: false,
              },
          !this.settings.restore
            ? undefined
            : {
                id: 5,
                title: 'Restore',
                icon: 'reload',
                disabled: false,
              },
          !this.settings.restoreAll
            ? undefined
            : {
                id: 6,
                title: 'Restore All',
                icon: 'check',
                disabled: false,
              },
          !this.settings.destroy
            ? undefined
            : {
                id: 7,
                title: 'Delete',
                icon: 'trash',
                disabled: false,
              },
          !this.settings.setting
            ? undefined
            : {
                id: 8,
                title: 'Setting',
                icon: 'settings',
                disabled: false,
              },
        ],
      };
    },
  },
  methods: {
    ...mapActions({
      deleteSome: deleteSomeGMD,
      destroyCollection: destroyCollection,
      restoreAllData: restoreAll,
      restoreCollection: restoreCollection,
    }),
    ...mapMutations({
      dialog: dialog,
    }),
    restoreAll() {
      this.dialog(() => this.restoreAllData());
    },
    restore() {
      this.dialog(() => this.restoreCollection());
    },
    detail() {
      console.log('this detail');
    },
    edit() {
      console.log('this edit');
    },
    delete() {
      this.dialog(() => this.deleteSome());
    },
    setting() {
      console.log('this setting');
    },
    destroy() {
      this.dialog(() => this.destroyCollection());
    },
    trash() {
      this.$router.push({
        name: 'recycle',
      });
    },
    dropdownHandler(key, active) {
      switch (key) {
        case 1:
          active ? false : this.detail();
          break;
        case 2:
          active ? false : this.edit();
          break;
        case 3:
          active ? false : this.delete();
          break;
        case 4:
          active ? false : this.trash();
          break;
        case 5:
          active ? false : this.restore();
          break;
        case 6:
          active ? false : this.restoreAll();
          break;
        case 7:
          active ? false : this.destroy();
          break;
        case 8:
          active ? false : this.setting();
          break;
        default:
          console.log('error!');
          break;
      }
    },
  },
  data() {
    return {
      dropdown: false,
    };
  },
};
</script>
<style lang="scss">
#dropdown .dropdown-action {
  background: #fff;
  border-radius: 10px;
  padding: 1rem 1.4rem;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  position: relative;
  z-index: 8;
  user-select: none;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 0.8rem;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
  }

  .dropdown-list {
    background: #fff;
    position: absolute;
    list-style: none;
    width: 150px;
    top: 60px;
    right: 0;
    border-radius: 4px;
    border: 1px solid #eee;
    z-index: 2;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    &::before {
      content: '';
      width: 20px;
      height: 20px;
      background: #fff;
      position: absolute;
      right: 5px;
      top: -5px;
      transform: rotate(45deg);
      z-index: -1;
    }

    .disabled {
      color: #999;
      cursor: not-allowed;

      &:hover {
        color: #999;
      }
    }

    li {
      padding: 0.5rem 1rem;
      z-index: 2;

      &:hover {
        color: #7367f0;
        background: linear-gradient(to-right, #7367f0, #fff);
      }

      span {
        font-size: 0.84rem;
        font-family: 'Poppins', sans-serif;
        margin-left: 0.7rem;
        font-weight: 400;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .backdrop {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background: transparent;
    z-index: 1;
    overflow: hidden;
  }
}
</style>
