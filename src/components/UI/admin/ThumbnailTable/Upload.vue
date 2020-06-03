<template lang="pug">
    div.upload-form
        input(ref="upload" type="file" hidden="hidden")
        div.img
            div.img-actual(:style="img")
        div.upload(@click.prevent="uploadHandler")
            div.info
                Icon.icon(icon="upload")
                h3 Upload Here
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
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
      };
    },
  },
  data() {
    return {
      urlImg:
        'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/user-13.005c80e1.jpg',
    };
  },
  methods: {
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
  }

  &:hover {
    border: 5px dotted #eae8fd;
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
        font: {
          size: 1rem;
          weight: 500;
          family: 'Poppins', sans-serif;
        }
      }
    }
  }
}
</style>
