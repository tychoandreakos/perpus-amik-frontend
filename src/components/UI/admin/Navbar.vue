<template>
  <header id="navbar-admin">
    <div class="icon">
      icon
    </div>
    <div class="widget">
      z
    </div>
  </header>
</template>
<script>
export default {
  name: 'NavbarAdmin',
  data() {
    return {
      icon: [
        {
          icon: 'email',
          title: 'Email'
        },
        {
          icon: 'calendar',
          title: 'Calendar'
        },
        {
          icon: 'comment',
          title: 'Chat'
        }
      ]
    };
  }
};
</script>
<style scoped>
#navbar-admin {
  background: #fff;
  border-radius: 7px;
  padding: 1rem 1.5rem;
  position: fixed;
  box-shadow: 0 5px 15px #f1f1f1;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 1rem;
  right: 1.5rem;
}

#navbar-admin .icon {
  display: flex;
  align-items: center;
}

#navbar-admin .icon i {
  cursor: pointer;
  color: #626262;
  font-weight: 600;
  font-size: 1rem;
}

#navbar-admin .icon i:hover {
  color: #877df2;
}
</style>
