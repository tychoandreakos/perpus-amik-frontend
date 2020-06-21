<template lang="pug">
  div#bibliobigrafi
    Header(:envState="false" :title="dataState.title" :breadcrumbsHeader="dataState.breadcrumbs")
    PanelAction(
      :title="dataState.title"
      :settings="dataState.PanelAction"
      :search="dataState.search"
      :breadcrumbsHeader="dataState.breadcrumbs"      
      :total="total"
      :button="dataState.button"
      @count="count"      
    )
    ThumbnailTable(:tableProps="database" :bibliobigrafiControl="true")
</template>

<script>
import ThumbnailTable from '../../../UI/admin/ThumbnailTable/Default';
import Header from '../../../UI/admin/Header';
import PanelAction from '../../../UI/admin/PanelAction';

export default {
  name: 'MainBibliobirafi',
  components: {
    ThumbnailTable,
    Header,
    PanelAction,
  },
  computed: {
    total() {
      return 5;
    },
  },
  methods: {
    count(e) {},
  },
  data() {
    return {
      dataState: {
        title: 'Bibliobigrafi (Book)',
        breadcrumbs: ['data list'],
        search: {
          placeholder: 'Search Book',
        },
        PanelAction: {
          detail: true,
          edit: true,
          delete: true,
          recycle: true,
          setting: true,
          destroy: false,
          restore: false,
          restoreAll: false,
        },
        button: {
          title: 'Add New Bibliobigrafi',
          icon: 'plus',
          type: 'membership',
        },
      },
      database: {
        head: [
          'Book Image',
          'Title',
          'ISBN/ISNN',
          'Copies',
          'Last Update',
          'Action',
        ],
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
          retrieve: false,
          destroy: false,
        },
        content: {
          dataCount: 3,
          result: [
            {
              image: {
                img: true,
                title: 'image',
                img_name:
                  'https://images-na.ssl-images-amazon.com/images/I/41pgnDUnI1L.jpg',
              },
              desc: {
                title:
                  'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases',
                author: ['douglas karry', 'douglas susan'],
              },
              isbn: '0735712573',
              copies: 1,
              lastUpdate: '2020-06-21 06:00:03',
            },
            {
              image: {
                img: true,
                title: 'image',
                img_name:
                  'https://images-na.ssl-images-amazon.com/images/I/51pzvNtXuiL._SX361_BO1,204,203,200_.jpg',
              },
              desc: {
                title:
                  'Ajax : creating Web pages with asynchronous JavaScript and XML',
                author: ['wachosysky edmond'],
              },
              isbn: '9780132272674',
              copies: 1,
              lastUpdate: '2020-06-21 06:00:03',
            },
            {
              image: {
                img: true,
                title: 'image',
                img_name:
                  'https://images-na.ssl-images-amazon.com/images/I/41aX8Y0Rb-L._SX404_BO1,204,203,200_.jpg',
              },
              desc: {
                title:
                  'Web application architecture : principles, protocols, and practices',
                author: ['Shklar', 'Leon', 'Rosen', 'Richard'],
              },
              isbn: '0471486566',
              copies: 0,
              lastUpdate: '2007-11-29 16:32:46',
            },
          ],
        },
      },
    };
  },
};
</script>
