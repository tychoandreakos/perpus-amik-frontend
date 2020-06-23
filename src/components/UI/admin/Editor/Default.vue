<template lang="pug">
    ckeditor(:editor="editor" v-model="editorData" placeholder="sddss"  :config="editorConfig")
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';

export default {
  name: 'Editor',
  components: {
    ckeditor: CKEditor.component,
  },
  watch: {
    editorData() {
      this.$emit('inputEditor', this.editorData);
    },
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {},
    };
  },
};
</script>

<style lang="scss">
.ck.ck-editor {
  width: 100% !important;
}

.ck.ck-editor__main > .ck-editor__editable {
  padding: 0 2rem;
}
</style>
