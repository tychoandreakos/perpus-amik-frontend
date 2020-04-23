<template lang="pug">
  section#dropdown
    div.dropdown-action(@click="dropdown = !dropdown")
      span {{ action.title }} of {{ total }}
      Icon(:icon="action.icon")
      transition(name="fade")
        ul.dropdown-list(v-if="dropdown")
          li(
            @click="actionHandler(meta, i)"
            v-for="(meta, i) in count"
            :key="i"
          )
            span {{ meta }}
    div.backdrop(@click="dropdown = !dropdown" v-if="dropdown")
</template>
<script>
import Icon from "vue-themify-icons";
export default {
  name: "PageNumber",
  components: {
    Icon,
  },
  methods: {
    actionHandler(val, index) {
      this.$emit("count", index * 2);
      this.action.title = val;
    },
  },
  props: {
    total: {
      required: true,
      type: Number,
    },
  },
  computed: {
    action() {
      return {
        title: this.count[0],
        icon: "angle-down",
      };
    },
    count() {
      const skip = 2;
      let x = this.total;
      const arr = [];
      if (x) {
        while (x / skip != 0) {
          arr.push(`${Math.round(x / 1.5)} - ${x}`);
          x = x - skip;
        }
      }

      return arr.reverse();
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
#dropdown {
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
  .dropdown-action {
    background: #fff;
    border-radius: 20px;
    padding: 1rem 1.4rem;
    width: 155px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    position: relative;
    z-index: 8;
    user-select: none;

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    span {
      font-family: "Poppins", sans-serif;
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
        content: "";
        width: 20px;
        height: 20px;
        background: #fff;
        position: absolute;
        right: 5px;
        top: -5px;
        transform: rotate(45deg);
        z-index: -1;
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
          font-family: "Poppins", sans-serif;
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
  }
}
</style>
