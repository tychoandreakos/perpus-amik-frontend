<template lang="pug">
    div.upload-form
        input(ref="upload" type="file" hidden="hidden" accept="image/png,image/jpeg"  @change="choiceHandler")
        div.img(v-if="urlImg")
            div.img-actual(:style="img")
        div.upload(@click.prevent="uploadHandler")
            div.info
                Icon.icon(icon="upload")
                h3 {{ uploadText }}
</template>

<script>
import Icon from 'vue-themify-icons';

export default {
  name: 'UploadMember',
  components: {
    Icon,
  },
  computed: {
    img() {
      return {
        background: "url('" + this.urlImg + "')",
      };
    },
  },
  data() {
    return {
      uploadText: 'Upload Here',
      urlImg: '',
    };
  },
  methods: {
    readData(file) {},
    choiceHandler(e) {
      const file = e.target.files[0];
      console.log(file);
      const reader = new FileReader();
      let data = reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.uploadText = file.name;
        this.urlImg = e.target.result;
      };
    },
    uploadHandler() {
      this.$refs.upload.click();
    },
  },
};
</script>

<style lang="scss">
.upload-form {
  width: 250px;
  height: 250px;
  background: #f5f5f5;
  border-radius: 5px;
  border: 5px solid #f5f5f5;
  position: relative;

  .img {
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 50%;
    background: #fff;
    top: -15px;
    right: -25px;
    border: 5px solid #fff;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
    // background-size: cover;
    // background-position: ce;

    .img-actual {
      width: 100%;
      height: 100%;
      background-size: cover !important;
      background-position: center !important;
      border-radius: 50%;
    }
  }

  &:hover {
    border: 5px dotted #8379f0;
  }

  .upload {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    .info {
      display: flex;
      align-items: center;
      flex-direction: column;

      .icon {
        font: {
          size: 4rem;
        }
        margin-bottom: 0.9rem;
        color: rgb(98, 98, 98);
      }

      h3 {
        color: rgb(98, 98, 98);
        text-align: center;
        font: {
          size: 0.9rem;
          weight: 500;
          family: 'Poppins', sans-serif;
        }
      }
    }
  }
}
</style>
