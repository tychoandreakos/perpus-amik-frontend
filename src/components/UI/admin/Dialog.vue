<template lang="pug">
    div.dialog(@click.self="anim()")
        div.dialog-box(:class="scaleAnim ? 'anim' : ''")
          h3.head {{ title | capitalize }}
          p.body {{ content }}
          div.footer
            form.btn(@submit.prevent="submit")
              input.hidden-input(ref="hiddenInput")
              Button(:btn="button")
            div.cancel(@click="cancelButton") {{ cancel | capitalize }}
</template>
<script>
import Button from './button/MiniButton';
import { dialog, decision } from '../../../store/module/API/type';
import { mapMutations } from 'vuex';

export default {
  name: 'Dialog',
  components: {
    Button,
  },
  mounted() {
    this.$refs.hiddenInput.focus();
  },
  methods: {
    ...mapMutations({
      dialog: dialog,
      decision: decision,
    }),
    submit() {
      this.decision(true);
      this.dialog();
    },
    cancelButton() {
      this.dialog();
      this.decision(false);
    },
    anim() {
      setTimeout(() => (this.scaleAnim = false), 500);
      this.scaleAnim = true;
    },
  },
  data() {
    return {
      scaleAnim: false,
      content:
        'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups. ',
      title: 'confirm',
      cancel: 'cancel',
      button: {
        style: {
          background: '#5f55c3',
          color: '#fff',
          padding: '.7rem 1.5rem',
          fontSize: '.9rem',
        },

        title: 'Accept',
      },
    };
  },
};
</script>

<style lang="scss">
.dialog {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .anim {
    animation: animate 1s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  @keyframes animate {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }

  .dialog-box {
    background: #fff;
    border-radius: 0.4rem;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    width: 35%;
    padding: 0.4rem 0.9rem;

    .head {
      color: #5f55c3;
      font: {
        size: 1.13rem;
        family: 'Poppins', sans-serif;
        weight: 500;
      }
      margin-bottom: 0.8rem;
      width: 100%;
    }

    .body {
      padding: 1rem 0;
      border-top: 1px solid #f2f2f2;
      border-bottom: 1px solid #f2f2f2;
      font: {
        size: 0.95rem;
      }
    }

    .footer {
      margin: 0.9rem 1rem;
      display: flex;
      align-items: center;
      float: right;

      .btn {
        .hidden-input {
          z-index: -9;
          width: 0px;
          position: absolute;
        }
      }

      .cancel {
        margin-left: 0.9rem;
        font: {
          size: 0.95rem;
        }
        color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: color 0.2s ease-in;

        &:hover {
          color: #000;
        }
      }
    }
  }
}
</style>
