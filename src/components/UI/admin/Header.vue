<template lang="pug">
  section#header
    div.left-menu
      h3 {{ title }}
      BreadCrumbsComponent(:breadcrumbs="breadcrumbsHeader")
    div.right-menu
      button.env(v-if="envState" @click="envHandler") Member Type
      button.btn
        Icon(icon="settings")
</template>
<script>
import BreadCrumbsComponent from './Breadcrumbs';
import Icon from 'vue-themify-icons';

export default {
  name: 'Header',
  props: {
    breadcrumbsHeader: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    envState: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    envHandler() {
      this.$router.push({
        name: 'memberType',
      });
    },
  },
  components: {
    Icon,
    BreadCrumbsComponent,
  },
};
</script>
<style lang="scss">
#header {
  display: grid;
  width: 100%;
  grid-template-columns: 60% auto;
  margin-bottom: 1.8rem;
  padding-top: 0.5rem;

  .left-menu {
    display: flex;
    align-items: center;
  }

  .right-menu {
    display: flex;
    justify-content: end;

    .env {
      background: #ff9f43;
      color: #fff;
      border: none;
      padding: 0.4rem 0.8rem;
      border-radius: 5px;
      cursor: pointer;
      transition: box-shadow 0.4s ease;
      font: {
        size: 0.87rem;
        family: 'Nunito', sans-serif;
      }

      &:hover {
        box-shadow: 0 1px 10px 1px #ff9f43;
      }
    }

    .btn {
      border: none;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      color: #fff;
      background: #7367f0;
      margin-left: 0.9rem;
      cursor: pointer;
      font: {
        size: 1rem;
      }
      transition: box-shadow 0.4s ease;
    }
  }

  h3 {
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    letter-spacing: 1.5px;
    margin-right: 0.8rem;
    padding-right: 0.8rem;
    border-right: 1px solid #dae1e7;
    color: #676363;
  }
}
</style>
