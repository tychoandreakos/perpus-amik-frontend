<template>
  <div class="pdf-document">
    <PDFPage
      v-for="page in pages"
      v-bind="{ page, scale }"
      :key="page.pageNumber"
    /></div
></template>
<script>
import range from 'lodash/range';
import PDFPage from './PDFPage';
import throttle from 'lodash/throttle';

const BATCH_COUNT = 10;

function getPages(pdf, first, last) {
  const allPages = range(first, last + 1).map(number => pdf.getPage(number));
  return Promise.all(allPages);
}

export default {
  name: 'PdfDocument',
  components: {
    PDFPage
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.throttledOnResize, true);
  },
  mounted() {
    this.updateScrollBounds();
    const throttledCallback = throttle(this.updateScrollBounds, 300);

    this.$el.addEventListener('scroll', throttledCallback, true);
    window.addEventListener('resize', throttledCallback, true);

    this.throttledOnResize = throttledCallback;
  },
  props: ['url', 'scale'],
  data() {
    return {
      pdf: undefined,
      pages: [],
      scrollTop: 0,
      clientHeight: 0,
      cursor: 0,
      didReachBottom: false
    };
  },
  created() {
    this.fetchPDF();
  },
  methods: {
    fetchPDF() {
      import('pdfjs-dist/webpack')
        .then(pdfjs => pdfjs.getDocument(this.url))
        .then(pdf => (this.pdf = pdf));
    },
    updateScrollBounds() {
      const { scrollTop, clientHeight } = this.$el;
      this.scrollTop = scrollTop;
      this.clientHeight = clientHeight;
      this.didReachBottom = this.isBottomVisible();
    },
    isBottomVisible() {
      const { scrollTop, clientHeight, scrollHeight } = this.$el;
      return scrollTop + clientHeight >= scrollHeight;
    },
    fetchPages() {
      if (!this.pdf) return;

      const currentCount = this.pages.length;
      if (this.pageCount > 0 && currentCount === this.pageCount) return;
      if (this.cursor > currentCount) return;

      const startPage = currentCount + 1; // PDF page numbering starts at 1
      const endPage = Math.min(currentCount + BATCH_COUNT, this.pageCount);
      this.cursor = endPage;

      getPages(this.pdf, startPage, endPage)
        .then(pages => {
          this.pages.splice(currentCount, 0, ...pages);
          return this.pages;
        })
        .catch(response => {
          this.$emit('document-errored');
        });
    }
  },
  mounted() {
    this.updateScrollBounds();
  },
  computed: {
    pageCount() {
      return this.pdf ? this.pdf.numPages : 0;
    }
  },
  watch: {
    pdf(pdf) {
      this.pages = [];
      this.fetchPages();
    },
    didReachBottom(didReachBottom) {
      if (didReachBottom) this.fetchPages();
    }
  }
};
</script>
<style scoped>
.pdf-document {
  position: absolute;
  overflow: auto;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 3rem;
  right: 0;
}
</style>
