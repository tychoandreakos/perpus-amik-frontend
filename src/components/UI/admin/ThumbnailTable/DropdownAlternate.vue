<template lang="pug">
    div.dropdown-membership(@click.capture="dropdown = true")
        div.input
            span {{ placeholder }}
            Icon(icon="angle-down")
        ul.dropdown-list(v-if="dropdown")
            li
                div.plus(@click="activePanel")
                    Icon(icon="plus")
                Input(
                    :property="property" 
                    :value="''" 
                    :disabledLabel="false" 
                    @input="input"
                )
            div.list
                li(v-for="(item, key) in items" :ref="key" :key="key" @click="listHandler(key)") {{ item[show]}} #[Icon.icon(icon="check" v-if="false")]
            li.last
                div.btn(@click.prevent="choiceHandler")
                    Button(:buttonProp="button.finish")
        div.backdrop-dropdown(@click.stop="dropdown = false"  v-if="dropdown")
</template>

<script>
import Input from '../Card/Input/Default';
import Icon from 'vue-themify-icons';
import Button from '../Button';

import {
  titleComponent,
  dataComponent,
  getType,
  postGMD,
  getSimple,
} from '../../../../store/module/API/type';

import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'DropdownAlternate',
  components: {
    Input,
    Icon,
    Button,
  },
  updated() {
    if (this.selected.length > 0 && this.dropdown) {
      for (let i = 0; i < this.selected.length; i++) {
        this.hoverList(this.selected[i]);
      }
    }
  },
  created() {
    this.placeholder = this.titleLabel;
    this.titleComponent('location');
    this.setSimple();
  },
  computed: {
    ...mapGetters({
      dataComponent: dataComponent,
      titleState: titleComponent,
      getSimple: getSimple,
    }),
    items() {
      return this.getSimple.result.data.result;
    },
    memberData() {
      return this.dataAdditional;
    },
    placeholderP() {
      return this.placeholderID;
    },
    dataState() {
      return this.dataComponent[this.titleState.toLowerCase()][0];
    },
    titleLabel() {
      return `choice ${this.title}`;
    },
  },
  watch: {
    placeholderP(key) {
      this.placeholder = this.dataAdditional[key];
    },
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    show: {
      type: String,
      required: false,
    },
    dataAdditional: {
      type: Object,
      required: true,
    },
    placeholderID: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: false,
    },
  },
  methods: {
    ...mapActions({
      setSimple: getSimple,
    }),
    ...mapMutations({
      setPanel: 'setPanel',
      titleComponent: titleComponent,
      setCreateInput: 'setCreateInput',
      getType: getType,
      setCountUpdateAlternate: 'setCountUpdateAlternate',
      setHeader: 'setHeader',
      setDefaultParams: 'setDefaultParams',
    }),
    activePanel() {
      this.setCountUpdateAlternate();
      this.setHeader(`Add New ${this.url}`);
      this.setCreateInput(this.dataState.createProp);
      this.setDefaultParams();
      this.getType(postGMD);
      if (this.dataComponent[this.titleState.toLowerCase()][0].selected) {
        this.setDropdownChoice({
          [this.dataComponent[this.titleState.toLowerCase()][0].createProp[1]
            .id]: this.dataComponent[this.titleState.toLowerCase()][0].selected,
        });
        this.setSelectedDropdown({
          [this.dataComponent[this.titleState.toLowerCase()][0].createProp[1]
            .id]: this.dataComponent[this.titleState.toLowerCase()][0].selected,
        });
      }
      this.setPanel();
    },
    input(e) {},
    choiceHandler() {
      let data = [];
      for (let i = 0; i < this.selected.length; i++) {
        data = [...data, this.items[this.selected[i]][this.show]];
      }
      this.placeholder = data.length > 0 ? data.join(', ') : this.titleLabel;
      this.dropdown = false;
    },
    hoverList(key) {
      const [list] = this.$refs[key];
      const color = 'rgba(114, 103, 240, 0.089)';
      if (list.style.background) {
        list.style.removeProperty('background');
      } else {
        list.style.background = color;
      }
    },

    listHandler(key) {
      if (this.selected.length > 0) {
        if (this.selected.includes(key) == false) {
          this.selected = [...this.selected, key];
        } else {
          let selected = [];
          for (let val of this.selected) {
            if (val != key) {
              selected = [...selected, val];
            }
          }
          this.selected = selected;
        }
      } else {
        this.selected = [...this.selected, key];
      }
      this.$emit('choice', key);
      this.hoverList(key);
    },
  },
  data() {
    return {
      property: {
        placeholder: 'insert your cover of image',
      },
      button: {
        add: {
          title: 'Add',
          icon: 'plus',
          type: 'add',
          style: {
            margin: 'auto',
            borderRadius: '4px',
            fontSize: '.9rem',
            padding: '.6rem',
            marginTop: '.9rem',
            padding: '.5rem 2.5rem',
            background: '#ff9f43',
            border: '1px solid #ff9f43',
            color: '#fff',
          },
        },
        finish: {
          title: 'Finish',
          icon: 'check',
          type: 'add',
          style: {
            margin: 'auto',
            borderRadius: '4px',
            fontSize: '.9rem',
            padding: '.6rem',
            marginTop: '.9rem',
            padding: '.5rem 2.5rem',
          },
        },
      },
      selected: [],
      placeholder: '',
      dropdown: false,
    };
  },
};
</script>

<style lang="scss">
.dropdown-list {
  .last {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .plus {
    position: absolute;
    top: 1.85rem;
    right: 1.7rem;
    overflow: hidden;
    padding: 0.4rem;
    cursor: pointer;
    border-radius: 50%;
    background: #28c76f;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font: {
      size: 0.8rem;
    }
  }

  .list {
    height: 110px;
    overflow-y: scroll;

    .active {
      background: rgb(115, 103, 240);
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      .icon {
        margin-right: 1rem;
      }

      &:hover {
        background: rgba(204, 204, 204, 0.151);
        color: #111;
      }
    }
  }
}
</style>
