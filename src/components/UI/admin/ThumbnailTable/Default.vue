<template lang="pug">
    section#table
        table
            thead
                th #[Checkbox(:check="false")]
                th(v-for="(item, i) in head" :key="i") {{ item }}
            tbody
                template(v-for="(body, keyBodies) in bodies")
                    tr(:key="keyBodies")
                        td #[Checkbox(:check="false")]
                        template(v-for="(item, keyItem) in body")
                            td.membership(v-if="item.img" :key="keyItem")
                                img(:src="item.url" :alt="item.title")
                            td.membership(v-else :key="keyItem") {{ item }}
                        td.action
                            button #[Icon(icon="pencil")]
                            button #[Icon(icon="trash")]

</template>

<script>
import Icon from 'vue-themify-icons';
import Checkbox from '../Checkbox';

export default {
  name: 'ThumbnailTable',
  components: {
    Icon,
    Checkbox,
  },
  data() {
    return {
      head: [
        'image',
        'name',
        'category',
        'popularity',
        'order status',
        'price',
        'action',
      ],
      bodies: [
        {
          image: {
            img: true,
            url:
              'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/06.png',
            title: 'image',
          },
          name: 'Fitbit - Activity Tracker',
          category: 'fitness',
          popularity: '80',
          orderStatus: 'delivered',
          price: '$99.99',
        },
        {
          image: {
            img: true,
            url:
              'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/09.png',
            title: 'image',
          },
          name: 'Fitbit - Flex Wireless Activity',
          category: 'fitness',
          popularity: '50',
          orderStatus: 'pending',
          price: '$99.99',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#table {
  img {
    width: 45%;
  }

  .membership {
  }
}
</style>
