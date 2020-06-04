<template lang="pug">
    section#table
        table
            thead
                th #[Checkbox(:check="false")]
                template(v-for="(item, i) in head")
                    template(v-if="enabledImage ? enabledImage : item != 'image'")
                        th(:key="i") {{ item }}
            tbody
                template(v-for="(body, keyBodies) in tableProps.content.result")
                    tr(:key="keyBodies")
                        td #[Checkbox(:check="false")]
                        template(v-for="(item, keyItem) in body")
                            td(v-if="item.img && enabledImage" :key="keyItem")
                                div.img(:style="{background: 'url('+ item.img_name +')'}")
                                //- img(:src="`${item.img_name}`" :alt="item.title")
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
  props: {
    tableProps: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      head: [
        'member image',
        'ID',
        'name',
        'membership type',
        'email',
        'last updated',
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

  tbody {
    tr {
      td {
        .img {
          border-radius: 50%;
          width: 75px;
          height: 75px;
          background-position: center !important;
          background-size: cover !important;
          margin: auto;
        }
      }
    }
  }
}
</style>
