<template>
  <section id="bibliobigrafi">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
    <div class="panel-action">
      <div class="panel-wrap">
        <DropdownComponent />
        <ButtonComponent
          :style="{ marginLeft: '1.2rem' }"
          :buttonProp="button"
        />
      </div>
      <div class="panel-wrap">
        <PageNumberComponent />
        <SearchComponent :search="search" />
      </div>
    </div>
    <TableComponent :tableProps="table" />
  </section>
</template>
<script>
import HeaderComponent from '../../UI/admin/Header';
import DropdownComponent from '../../UI/admin/Dropdown';
import ButtonComponent from '../../UI/admin/Button';
import PageNumberComponent from '../../UI/admin/PageNumber';
import SearchComponent from '../../UI/admin/Search';
import TableComponent from '../../UI/admin/TableAdmin';

export default {
  name: 'Bibliobigrafi',
  components: {
    HeaderComponent,
    DropdownComponent,
    ButtonComponent,
    PageNumberComponent,
    SearchComponent,
    TableComponent
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
}
#bibliobigrafi .panel-action,
.panel-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
