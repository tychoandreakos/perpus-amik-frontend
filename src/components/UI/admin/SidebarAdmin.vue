<template>
  <aside id="sidebar-admin">
    <div class="logo">
      <h2>{{ metaSidebar.title }}</h2>
      <button @click="bulletHandler">
        <div v-if="bullet" class="bullet">x</div>
      </button>
    </div>
    <ul>
      <li v-for="(data, i) in sidebarData" :key="i">
        <template v-if="data.children">
          <div class="dropdown" @click="dropdown = !dropdown">
            <div class="link">
              <Icon :icon="data.icon" />
              <div class="text">
                {{ data.title }}
                <Icon
                  :style="dropdown ? { transform: 'rotate(90deg)' } : {}"
                  icon="angle-right"
                />
              </div>
            </div>
            <DropdownComponent
              :style="dropdown ? { height: '350px' } : { height: '0px' }"
              :dropdownProps="data.children"
            />
          </div>
        </template>
        <template v-else>
          <router-link
            class="link"
            :to="{ name: data.href ? data.href : 'dashboard' }"
          >
            <Icon :icon="data.icon" />
            {{ data.title }}
          </router-link>
        </template>
      </li>
    </ul>
  </aside>
</template>
<script>
import Icon from 'vue-themify-icons';
import DropdownComponent from './DropdownSidebar';

export default {
  name: 'SidebarAdmin',
  components: {
    Icon,
    DropdownComponent
  },
  methods: {
    bulletHandler() {
      this.bullet = !this.bullet;
      this.$emit('sidebarMetaChild', this.bullet);
    }
  },
  data() {
    return {
      bullet: true,
      dropdown: false,
      sidebarData: [
        {
          title: 'Dashboard',
          icon: 'home'
        },
        {
          title: 'Bibliobigrafi',
          icon: 'receipt',
          href: 'bibliobigrafi'
        },
        {
          title: 'Circulation',
          icon: 'reload',
          href: 'circulation'
        },
        {
          title: 'Membership',
          icon: 'id-badge',
          href: 'membership'
        },
        {
          title: 'Master File',
          icon: 'file',
          children: [
            {
              title: 'GMD',
              icon: '',
              href: 'gmd'
            },
            {
              title: 'Publisher',
              icon: '',
              href: 'publisher'
            },
            {
              title: 'Author',
              icon: '',
              href: 'author'
            },
            {
              title: 'Subject',
              icon: '',
              href: 'subject'
            },
            {
              title: 'Location',
              icon: '',
              href: 'location'
            },
            {
              title: 'Place',
              icon: '',
              href: 'place'
            },
            {
              title: 'Item Status',
              icon: '',
              href: 'itemStatus'
            },
            {
              title: 'Collection',
              icon: '',
              href: 'collection'
            },
            {
              title: 'Language',
              icon: '',
              href: 'language'
            }
          ]
        },
        {
          title: 'Settings',
          icon: 'settings'
        },
        {
          title: 'Reporting',
          icon: 'stats-up'
        },
        {
          title: 'Serial Control',
          icon: 'layers-alt'
        },
        {
          title: 'Logout',
          icon: 'arrow-circle-right'
        }
      ],
      metaSidebar: {
        title: 'Library'
      }
    };
  }
};
</script>
<style scoped>
#sidebar-admin {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
}

#sidebar-admin .logo {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
}

#sidebar-admin .logo h2 {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #5143eb;
  letter-spacing: 2px;
}

#sidebar-admin .logo button {
  border-radius: 50%;
  height: 17px;
  width: 17px;
  background: none;
  border: 2px solid #7c71f1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: unset;
}

#sidebar-admin .logo button .bullet {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 2px solid #7c71f1;
  font-size: 0;
}

#sidebar-admin ul {
  padding: 1rem 2rem;
  list-style: none;
}

#sidebar-admin ul li .dropdown {
  cursor: pointer;
}

#sidebar-admin ul li .dropdown .text {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

#sidebar-admin ul li .dropdown .text i {
  font-size: 0.8rem;
  margin: 0;
  transition: transform 0.3s ease;
}

#sidebar-admin ul li .link {
  font-family: 'Quicksand', sans-serif;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #565656;
  font-size: 1rem;
  transition: padding-left 0.2s ease;
  font-weight: 500;
  font-size: 0.99rem;
  padding: 0.8rem 0;
}

#sidebar-admin ul li .link:hover {
  padding-left: 0.3rem;
}

#sidebar-admin ul li .link i {
  margin-right: 1.6rem;
  font-size: 1.1rem;
}
</style>
