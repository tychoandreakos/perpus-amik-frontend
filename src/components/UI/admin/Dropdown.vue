<template>
  <section id="dropdown">
    <div class="dropdown-action" @click="dropdown = !dropdown">
      <span>{{ action.title }}</span>
      <Icon :icon="action.icon" />
      <transition name="fade">
        <ul v-if="dropdown" class="dropdown-list">
          <template v-for="meta in action.dropdownMeta">
            <li
              :class="meta.disabled ? 'disabled' : ''"
              @click="dropdownHandler(meta.id, meta.disabled)"
              :key="meta.id"
              v-if="meta"
            >
              <Icon :icon="meta.icon" />
              <span>{{ meta.title }}</span>
            </li>
          </template>
        </ul>
      </transition>
    </div>
    <div class="backdrop" @click="dropdown = !dropdown" v-if="dropdown"></div>
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
import {
  deleteSomeGMD,
  dialog,
  checkbox,
} from '../../../store/module/API/type';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'DropdownAdmin',
  components: {
    Icon,
  },
  props: {
    disabledDetail: {
      type: Boolean,
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
          this.disabledDetail
            ? undefined
            : {
                id: 1,
                title: 'See Detail',
                icon: 'eye',
              },
          {
            id: 2,
            title: 'Edit / Update',
            icon: 'pencil',
          },
          {
            id: 3,
            title: 'Delete',
            icon: 'trash',
            disabled: true,
          },
          {
            id: 4,
            title: 'Setting',
            icon: 'settings',
          },
          {
            id: 5,
            title: 'Recycle Bin',
            icon: 'trash',
          },
        ],
      };
    },
  },
  methods: {
    ...mapActions({
      deleteSome: deleteSomeGMD,
    }),
    ...mapMutations({
      dialog: dialog,
    }),
    detail() {
      console.log('this detail');
    },
    edit() {
      console.log('this edit');
    },
    delete() {
      this.dialog(() => this.deleteSome());
    },
    deleteAll() {
      console.log('this deleteAll');
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
          active ? false : this.deleteAll();
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
