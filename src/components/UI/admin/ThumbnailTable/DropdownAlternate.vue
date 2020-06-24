<template lang="pug">
    div.dropdown-membership(@click.capture="dropdown = true")
        div.input
            span {{ placeholder }}
            Icon(icon="angle-down")
        ul.dropdown-list(v-if="dropdown")
            li
                Input(
                    :property="property" 
                    :value="''" 
                    :disabledLabel="false" 
                    @input="input"
                )
            div.list
                li(v-for="(item, i) in memberData" ref="list" :key="i" @click="listHandler(i)") {{ item }} #[Icon.icon(icon="check" v-if="false")]
                
            li
                div.btn(@click.prevent="choiceHandler")
                    Button(:buttonProp="button")
        div.backdrop-dropdown(@click.stop="dropdown = false"  v-if="dropdown")
</template>

<script>
import Input from '../Card/Input/Default';
import Icon from 'vue-themify-icons';
import Button from '../Button';

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
  computed: {
    memberData() {
      return this.typeMember;
    },
    placeholderP() {
      return this.placeholderID;
    },
  },
  watch: {
    placeholderP(key) {
      this.placeholder = this.typeMember[key];
    },
  },
  props: {
    typeMember: {
      type: Object,
      required: true,
    },
    placeholderID: {
      type: Number,
      required: true,
    },
  },
  methods: {
    input(e) {},
    choiceHandler() {
      let data = [];
      for (let i = 0; i < this.selected.length; i++) {
        data = [...data, this.typeMember[this.selected[i]]];
      }
      this.placeholder = data.join(', ');
      this.dropdown = false;
    },
    hoverList(key) {
      const color = 'rgba(114, 103, 240, 0.089)';
      if (this.$refs.list[key].style.background) {
        this.$refs.list[key].style.removeProperty('background');
      } else {
        this.$refs.list[key].style.background = color;
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
      selected: [],
      placeholder: this.typeMember[1],
      dropdown: false,
    };
  },
};
</script>

<style lang="scss">
.dropdown-list {
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
