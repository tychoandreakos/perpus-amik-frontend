<template lang="pug">
    div.upload-bibliobigrafi
        div.img(:style="this.img.length > 0 ? imgStyle : ''")
        input(ref="upload" type="file" hidden="hidden" accept="image/png,image/jpeg"  @change="choiceHandler")
        div.desc
            h3 {{ property.placeholder }}
            div.btn
                div.upload(@click.prevent="uploadHandler")
                  Button(:buttonProp="button.upload")
                div.remove( @click.prevent="removeHandler")
                  Button(:buttonProp="btnRemove ?  button.remove : button.removeDisabled")
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
  computed: {
    imgStyle() {
      return {
        background: "url('" + this.img + "')",
      };
    },
  },
  methods: {
    setUpload() {
      this.$emit('upload', this.img);
    },
    removeHandler() {
      if (this.btnRemove) {
        this.btnRemove = false;
        this.uploadText = '';
        this.img = this.imgDefault;
        this.$emit('upload', undefined);
      }
    },
    choiceHandler(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      let data = reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.uploadText = file.name;
        this.img = e.target.result;
        this.setUpload();
      };
      this.btnRemove = true;
    },
    uploadHandler() {
      this.$refs.upload.click();
    },
  },
  data() {
    return {
      imgDefault:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png',
      img: '',
      btnRemove: false,
      uploadText: '',
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
        removeDisabled: {
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
            opacity: 0.4,
            cursor: 'default',
            pointerEvents: 'none',
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
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png');
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
