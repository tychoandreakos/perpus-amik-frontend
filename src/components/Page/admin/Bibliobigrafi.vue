<template>
  <section id="bibliobigrafi">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
    <PanelActionComponent :search="search" :button="button" />
    <TableComponent :tableProps="table" />
  </section>
</template>
<script>
import HeaderComponent from '../../UI/admin/Header';
import PanelActionComponent from '../../UI/admin/PanelAction';
import TableComponent from '../../UI/admin/TableAdmin';

export default {
  name: 'Bibliobigrafi',
  components: {
    HeaderComponent,
    TableComponent,
    PanelActionComponent
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      button: {
        title: 'Add New Bibliobigrafi',
        icon: 'plus'
      },
      title: 'Bibliobigrafi',
      search: {
        placeholder: 'Search Bibliobigrafi'
      },
      table: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true
        },
        title: ['Title', 'ISBN/ISNN', 'Copies', 'Last Update'],
        sample: [
          {
            book: {
              title:
                'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases',
              author: ['Douglas', 'Susan']
            },
            isbn: '0735712573',
            copies: 1,
            updated: '2020-02-18 14:09:09'
          },
          {
            book: {
              title:
                'Ajax : creating Web pages with asynchronous JavaScript and XML',
              author: ['Susan']
            },
            isbn: '0735712573',
            copies: 1,
            updated: '2020-02-18 14:09:09'
          },
          {
            book: {
              title:
                'Web application architecture : principles, protocols, and practices',
              author: ['Susan']
            },
            isbn: '0735712573',
            copies: 1,
            updated: '2020-02-18 14:09:09'
          },
          {
            book: {
              title:
                'Information Architecture for the World Wide Web: Designing Large-Scale Web Sites',
              author: ['Susan']
            },
            isbn: '0735712573',
            copies: 1,
            updated: '2020-02-18 14:09:09'
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#bibliobigrafi {
  width: 100%;
  height: 100%;
}
</style>
