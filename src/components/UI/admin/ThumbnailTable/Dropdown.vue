<template lang="pug">
  div.dropdown-membership(@click="dropdown = !dropdown")
    div.input
        span {{ placeholder }}
        Icon(icon="angle-down")
    ul.dropdown-list(v-if="dropdown")
        li(v-for="(item, i) in memberData" :key="i" @click="listHandler(i)") {{ item }}
    div.backdrop-dropdown(v-if="dropdown")
</template>

<script>
import Icon from 'vue-themify-icons';

export default {
  name: 'DropdownMembership',
  components: {
    Icon,
  },
  computed: {
    memberData() {
      return this.typeMember;
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
    listHandler(key) {
      this.placeholder = this.typeMember[key];
      this.$emit('choice', key);
    },
  },
  data() {
    return {
      placeholder: this.typeMember[this.placeholderID],
      dropdown: false,
    };
  },
};
</script>

<style lang="scss">
.dropdown-membership {
  width: 100%;
  padding: 0.6rem;
  background: #fcfcfc;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);

  .backdrop-dropdown {
    position: fixed;
    background: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    cursor: default;
  }

  .dropdown-list {
    position: absolute;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
    background: #fff;
    top: -1px;
    left: -1px;
    right: -1px;
    list-style: none;
    padding: 0.4rem 0.6rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    z-index: 5;
    font: {
      family: 'Poppins', sans-serif;
      size: 0.86rem;
    }

    li {
      width: 100%;
      padding: 0.5rem 0.4rem;
      color: #626262;
      text-transform: capitalize;

      &:hover {
        background: rgba(204, 204, 204, 0.151);
        color: #111;
      }
    }
  }

  .input {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    font: {
      size: 0.85rem;
    }

    span {
      text-transform: capitalize;
      color: #626262;
      font: {
        family: 'Poppins', sans-serif;
      }
    }
  }
}
</style>
