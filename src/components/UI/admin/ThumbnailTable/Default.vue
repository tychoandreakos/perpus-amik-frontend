<template lang="pug">
    section#table
        table
            thead
                th #[Checkbox(:check="false")]
                template(v-for="(item, i) in head")
                    template(v-if="enabledImage ? enabledImage : item != 'image'")
                        th(:key="i") {{ item }}
            tbody
                template(v-for="(body, keyBodies) in bodies")
                    tr(:key="keyBodies")
                        td #[Checkbox(:check="false")]
                        template(v-for="(item, keyItem) in body")
                            td(v-if="item.img && enabledImage" :key="keyItem")
                                img(:src="item.url" :alt="item.title")
                            td(v-else-if="!item.img" :key="keyItem") {{ item }}
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
      enabledImage: true,
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
}
</style>
