<template lang="pug">
  div#float-message(:style="panel ? show : off")
    div.close(@click="showPanel")
        Icon(icon="close")
    div.body
        Icon(icon="book")
        h3 Selamat Datang Elang
        p.desc Izinkan kami untuk memperkenalkan diri, kami adalah Manisku Digital Library yang paling hebat.
</template>

<script>
import Icon from "vue-themify-icons";
export default {
  name: "FloatMessage",
  components: {
    Icon,
  },
  data() {
    return {
      panel: true,
      show: {
        animation: "panelAnimate 0.7s ease-in-out",
      },
      off: {
        animation: "panelAnimate 0.7s ease-in-out reverse;",
        transform: "translateX(120%)",
      },
    };
  },
  methods: {
    showPanel() {
      this.panel = !this.panel;
    },
  },
};
</script>

<style lang="scss">
#float-message {
  position: fixed;
  z-index: 99;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background: linear-gradient(to left, #613ff4, #6a4ee9f1);
  color: #fff;
  right: 1.1%;
  bottom: 2%;
  border-radius: 4px;
  width: 350px;
  padding: 1rem;

  @keyframes panelAnimate {
    from {
      transform: translateX(120%);
    }
    to {
      transform: translateX(0);
    }
  }

  font: {
    family: "Nunito", sans-serif;
    weight: 400;
  }

  .close {
    cursor: pointer;
    display: inline;
    padding: 0.3rem;
    transition: 0.3s transform ease-in;

    &:hover:focus:active {
      transform: scale(0.2);
    }
  }

  .body {
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .desc {
      font: {
        family: "Nunito", sans-serif;
        size: 0.9rem;
      }
    }

    h3 {
      text-align: center;
      margin: {
        bottom: 0.7rem;
        top: 0.8rem;
      }
      font: {
        family: "Poppins", sans-serif;
        size: 1.5rem;
      }
    }

    i {
      font-size: 4rem;
    }
  }
}
</style>
