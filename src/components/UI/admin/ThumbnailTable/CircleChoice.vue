<template lang="pug">
    div.circle-choice
        .circle-wrapper(v-for="(item, i) in state" :key="i" @click="choiceHandler(i)") 
            div.circle(:class="item.selected ? 'active' : null")
                Icon.icon(:icon="item.selected ? 'check' : item.icon")
            span(:class="item.selected ? 'active-span' : null") {{ item.title }}
</template>

<script>
import Icon from 'vue-themify-icons';

export default {
  name: 'CircleChoiceMembership',
  components: {
    Icon,
  },
  methods: {
    choiceHandler(key) {
      this.$emit('choice', key);
    },
  },
  props: {
    state: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.circle-choice {
  display: flex;
  justify-content: space-around;

  .active {
    border: none !important;
    background: #7367f0;
    color: #fff;
  }

  .active-span {
    color: #7367f0 !important;
  }

  .circle-wrapper {
    width: 55px;
    cursor: pointer;

    &:hover > span {
      color: #7367f0;
    }

    &:hover > .circle {
      border: none !important;
      background: #7367f0;
      color: #fff;
    }

    span {
      text-align: center;
      display: block;
      color: rgb(98, 98, 98);
      text-transform: capitalize;
      font: {
        size: 0.9rem;
        family: 'Nunito', sans-serif;
      }
    }
    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 55px;
      color: #ccc;
      border: 3px solid #ccc;
      border-radius: 50%;
      margin-bottom: 0.4rem;
      transition: all 0.4s ease-in;

      .icon {
        font: {
          size: 1.5rem;
          weight: bold;
        }
      }
    }
  }
}
</style>
