<template lang="pug">
    section.pattern-bibliobigrafi
        div.border
        div.methods(:style="slide ? {background: '#ea5455'} : {}" @click="slide = !slide")
            template(v-if="slide")
                Icon(icon="close")
                span {{ title.remove }}
            template(v-else)
                Icon(icon="plus")
                span {{ title.add }}
        div.add-pattern(:style="slide ? {height: '350px'} : {}")
          AddPattern
        div.pattern-wrapper
            template(v-for="(item, i) in stateData")
                div.form-wrapper(:key="i")
                    label {{ item.title }}
                    template(v-if="item.type == part[1]")
                        Input(:property="item.property" :value="''" :disabledLabel="false" @input="input")
                    template(v-if="item.type == part[0]")
                        Dropdown.drp(
                            :placeholderID="0" 
                            :typeMember="Array.isArray(item.typeMember) ? {} : item.typeMember"  
                            @choice="input($event, item.id)"
                                )
</template>

<script>
import Dropdown from '../ThumbnailTable/DropdownAlternate';
import Input from '../Card/Input/Default';
import Icon from 'vue-themify-icons';
import AddPattern from './Insert';

export default {
  name: 'patternBibliobigrafi',
  components: {
    Dropdown,
    Input,
    Icon,
    AddPattern,
  },
  methods: {
    input(e) {},
  },
  data() {
    return {
      title: {
        remove: 'Close Pattern',
        add: 'Add Pattern',
      },
      slide: false,
      part: ['dropdown', 'text'],
      stateData: [
        {
          title: 'Choose Pattern',
          id: 'pattern_id',
          type: 'dropdown',
          typeMember: {
            0: 'Sutendi Styles',
            1: 'Ahmad Zaky',
            2: 'Titaful Sembiring',
          },
        },
        {
          title: 'Total Item',
          type: 'text',
          property: {
            id: 'id',
            placeholder: 'Insert your title',
            type: 'text',
          },
        },
        {
          title: 'Collection Type',
          id: 'collection_id',
          type: 'dropdown',
          typeMember: {
            0: 'Sutendi Styles',
            1: 'Ahmad Zaky',
            2: 'Titaful Sembiring',
          },
        },
        {
          title: 'Location',
          id: 'location_id',
          type: 'dropdown',
          typeMember: {
            0: 'Sutendi Styles',
            1: 'Ahmad Zaky',
            2: 'Titaful Sembiring',
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.pattern-bibliobigrafi {
  margin-top: 0.9rem;
  position: relative;
  width: 100%;

  .add-pattern {
    overflow: hidden;
    height: 0;
    transition: height 0.4s ease-in-out;
  }

  .drp {
    width: 100%;
  }

  .border {
    position: absolute;
    height: 1.4px;
    background: rgba(0, 0, 0, 0.2);
    top: -1.65rem;
    left: 15rem;
    right: 1.5rem;
  }

  .methods {
    position: absolute;
    right: 0;
    top: -2.86rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: rgb(115, 103, 240);
    color: #fff;
    padding: 0.7rem 1rem;
    border-radius: 50px;
    text-transform: capitalize;
    transition: width 0.4 ease-in-out;
    transition: background 0.5s ease-in-out;
    font: {
      size: 0.8rem;
      family: 'Poppins', sans-serif;
    }

    span {
      margin-left: 0.4rem;
    }
  }

  .pattern-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    align-items: center;
  }
}
</style>
