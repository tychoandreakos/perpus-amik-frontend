<template lang="pug">
    div.upload-bibliobigrafi
        div.img
        div.desc
            h3 {{ property.placeholder }}
            div.btn
                Button(:buttonProp="button.upload")
                Button(:buttonProp="button.remove")
</template>

<script>
import Button from '../../../UI/admin/Button';

export default {
  name: 'UploadBibliobigrafi',
  components: {
    Button,
  },
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      button: {
        remove: {
          title: 'Remove',
          icon: 'trash',
          type: 'add',
          style: {
            margin: 'auto',
            borderRadius: '4px',
            fontSize: '.9rem',
            padding: '.6rem',
            marginLeft: '1rem',
            width: '125px',
          },
        },
        upload: {
          title: 'Upload',
          icon: 'upload',
          type: 'add',
          style: {
            margin: 'auto',
            borderRadius: '4px',
            fontSize: '.9rem',
            padding: '.6rem',
            width: '115px',
            background: '#7367f0',
            color: '#fff',
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.upload-bibliobigrafi {
  display: grid;
  grid-template-columns: 30% 70%;
  column-gap: 0.5rem;
  align-items: center;

  .img {
    border-radius: 2px;
    height: 105px;
    width: 85px;
    background: url('https://learning.oreilly.com/library/cover/9781484250464/');
    background-size: contain !important;
    background-repeat: no-repeat !important;
  }

  .desc {
    display: flex;
    align-items: center;
    flex-direction: column;
    .btn {
      display: flex;
    }
    h3 {
      text-transform: capitalize;
      margin-bottom: 0.5rem;
      font: {
        family: 'Nunito', sans-serif;
        weight: 400;
        size: 1rem;
      }
    }
  }
}
</style>
