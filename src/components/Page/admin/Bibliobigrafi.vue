<template>
  <section id="bibliobigrafi">
    <div class="header">
      <h3>Bibliobigrafi</h3>
      <BreadCrumbsComponent :breadcrumbs="breadcrumbs" />
    </div>
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
  </section>
</template>
<script>
import BreadCrumbsComponent from '../../UI/admin/Breadcrumbs';
import DropdownComponent from '../../UI/admin/Dropdown';
import ButtonComponent from '../../UI/admin/Button';
import PageNumberComponent from '../../UI/admin/PageNumber';
import SearchComponent from '../../UI/admin/Search';

export default {
  name: 'Bibliobigrafi',
  components: {
    BreadCrumbsComponent,
    DropdownComponent,
    ButtonComponent,
    PageNumberComponent,
    SearchComponent
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      button: {
        title: 'Add New Bibliobigrafi',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Bibliobigrafi'
      }
    };
  }
};
</script>
<style scoped>
#bibliobigrafi {
  width: 100%;
  padding-top: 0.5rem;
}

#bibliobigrafi .header {
  display: flex;
  width: 100%;
  margin-bottom: 1.8rem;
}

#bibliobigrafi h3 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 1.5px;
  margin-right: 0.8rem;
  padding-right: 0.8rem;
  border-right: 1px solid #dae1e7;
  color: #676363;
}

#bibliobigrafi .panel-action,
.panel-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
