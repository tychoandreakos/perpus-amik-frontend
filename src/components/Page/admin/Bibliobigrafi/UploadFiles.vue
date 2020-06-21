<template lang="pug">
    div.upload-files
      section.upper
        div.files-box
          div.file-description
            div.logo-files PDF
            div.container
              div.desc
                span.title landing_page.psd
                span.size 50%
              div.progress
                div.inner-progress(:style="width")
      section.bottom
        div.browse
          span Browse files
        div.upload #[Icon(icon="check")]
</template>

<script>
import Icon from 'vue-themify-icons';

export default {
  name: 'UploadFilesBibliobigrafi',
  components: {
    Icon,
  },
  computed: {
    width() {
      return {
        width: 55 + '%',
      };
    },
  },
};
</script>

<style lang="scss">
.upload-files {
  width: 100%;

  .upper {
    padding: 0 2rem;
    margin: 0.4rem 0;

    .files-box {
      width: 100%;
      .file-description {
        display: flex;
        align-items: center;
        width: 100%;

        .logo-files {
          margin-right: 0.9rem;
          width: 60px;
          height: 60px;
          border-radius: 5px;
          background: #ffcabb;
          display: flex;
          justify-content: center;
          align-items: center;
          font: {
            family: 'Nunito', sans-serif;
          }
          color: #fff;
        }

        .container {
          width: 100%;
          .progress {
            width: 100%;
            height: 5.5px;
            border-radius: 10px;
            background: #e4ecfa;
            position: relative;

            .inner-progress {
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              transition: width 0.4s ease-in-out;
              background: #5643eb;
              box-shadow: 0 1px 10px 1px #5743eb50;
            }
          }
          .desc {
            display: flex;
            justify-content: space-between;

            .title {
              font: {
                size: 1rem;
              }
            }
          }
        }
      }
    }
  }

  .bottom {
    background: #f1f5ff;
    position: relative;
    padding: 1.6rem;
    margin-top: 2.5rem;

    .browse {
      display: flex;
      justify-content: center;
      padding: 3rem;
      align-items: center;
      border-radius: 15px;
      border: 5px dotted #dfe8fe;
      cursor: pointer;
      transition: 0.4s ease-out border;
      color: #99aac5;
      text-transform: capitalize;
      font: {
        size: 1.5rem;
        family: 'Poppins', sans-serif;
      }

      &:hover {
        color: #5743eb9a;
        border: 5px dotted #5643eb;
      }
    }

    .upload {
      cursor: pointer;
      position: absolute;
      width: 75px;
      height: 75px;
      background: #5643eb;
      border-radius: 50%;
      top: -1rem;
      right: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      box-shadow: 0 1px 10px 1px #5643eb;
      transition: box-shadow 0.3s ease-in;
      font: {
        size: 1.4rem;
      }

      &:hover {
        box-shadow: none;
      }
    }
  }
}
</style>
