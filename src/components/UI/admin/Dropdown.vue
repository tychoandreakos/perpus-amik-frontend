<template>
  <section id="dropdown">
    <div class="dropdown-action" @click="dropdown = !dropdown">
      <span>{{ action.title }}</span>
      <Icon :icon="action.icon" />
      <transition name="fade">
        <ul v-if="dropdown" class="dropdown-list">
          <li v-for="(meta, i) in action.dropdownMeta" :key="i">
            <Icon :icon="meta.icon" />
            <span>{{ meta.title }}</span>
          </li>
        </ul>
      </transition>
    </div>
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
export default {
  name: 'DropdownAdmin',
  components: {
    Icon
  },
  data() {
    return {
      dropdown: false,
      action: {
        title: 'Actions',
        icon: 'angle-down',
        dropdownMeta: [
          {
            title: 'See Detail',
            icon: 'eye'
          },
          {
            title: 'Edit / Update',
            icon: 'pencil'
          },
          {
            title: 'Delete',
            icon: 'trash'
          },
          {
            title: 'Delete All',
            icon: 'close'
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#dropdown .dropdown-action {
  background: #fff;
  border-radius: 10px;
  padding: 1rem 1.4rem;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  position: relative;
}

#dropdown .dropdown-action:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

#dropdown .dropdown-action i {
  font-size: 0.88rem;
}

#dropdown .dropdown-action span {
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
}

#dropdown .dropdown-action .dropdown-list {
  background: #fff;
  position: absolute;
  list-style: none;
  width: 150px;
  top: 60px;
  right: 0;
  border-radius: 4px;
  border: 1px solid #eee;
  z-index: 2;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

#dropdown .dropdown-action .dropdown-list::before {
  content: '';
  width: 20px;
  height: 20px;
  background: #fff;
  position: absolute;
  right: 5px;
  top: -5px;
  transform: rotate(45deg);
  z-index: -1;
}

#dropdown .dropdown-action .dropdown-list li {
  padding: 0.5rem 1rem;
  z-index: 2;
}

#dropdown .dropdown-action .dropdown-list li:hover {
  color: #7367f0;
  background: linear-gradient(to-right, rgba(115, 103, 240, 0.1), #fff);
}

#dropdown .dropdown-action .dropdown-list li span {
  font-size: 0.84rem;
  font-family: 'Poppins', sans-serif;
  margin-left: 0.7rem;
  font-weight: 400;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
