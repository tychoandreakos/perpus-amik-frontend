<template>
  <section id="footer-user">
    <ul>
      <li v-for="(link, i) in footer" :key="i">
        <a :href="link.href">{{ link.title }}</a>
      </li>
    </ul>
    <div class="copyright">
      <p>{{ copyright.title }}</p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      copyright: {
        title: "©2020 Manisku Library, Inc"
      },
      footer: [
        {
          title: "Settings",
          href: "#"
        },
        {
          title: "Support",
          href: "#"
        },
        {
          title: "Sign Out",
          href: "#"
        }
      ]
    };
  }
};
</script>
<style scoped>
#footer-user {
  background: #f8f8f8;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
}

#footer-user ul {
  display: flex;
  list-style: none;
}

#footer-user ul li {
  margin: 0 1.2rem;
}

#footer-user ul li a {
  text-decoration: none;
  color: inherit;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
}

#footer-user ul li a:hover {
  text-decoration: underline;
  color: #613ff4;
}

#footer-user .copyright {
  display: flex;
  margin-top: 1rem;
}

#footer-user .copyright p {
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
}
</style>
