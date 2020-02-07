<template>
  <section id="account">
    <NavbarComponent />
    <HeroComponent
      :propsInfo="panelInfo"
      :propsButtonEnabled="false"
      :propsHero="hero"
      :propsPanel="panel"
      :propsTitle="titleHero"
    />
    <div class="login-info">
      <div class="left">
        <h3>O’Reilly Online Learning</h3>
        <p>
          Learn the way you learn best—through books, videos, interactive
          tutorials, or live online classes.
        </p>
        <ButtonComponent title="Masuk Disini" />
      </div>
      <div class="right">
        <div class="info">
          <h3>Conferences Dashboard</h3>
          <p><a href="#">Sign in</a> to access your events.</p>
        </div>
        <div class="info">
          <h3>Members Library</h3>
          <p><a href="#">Sign in</a> to access your events.</p>
        </div>
      </div>
    </div>
    <FooterComponent />
  </section>
</template>
<script>
import NavbarComponent from "../UI/Navbar";
import HeroComponent from "../UI/Hero";
import ButtonComponent from "../UI/ButtonSimple";
import FooterComponent from "../UI/Footer";

export default {
  name: "Account",
  components: {
    NavbarComponent,
    HeroComponent,
    ButtonComponent,
    FooterComponent
  },
  data() {
    return {
      panel: {
        width: "52%",
        padding: "4rem",
        height: "38%"
      },
      titleHero: {
        fontSize: "2.9rem",
        lineHeight: "50px",
        borderBottom: '0'
      },
      hero: {
        height: "40vh",
        background:
          "url('https://wallpapersmug.com/download/2560x1024/d00534/facade-building-architecture.jpg') center/cover no-repeat fixed"
      },
      panelInfo: {
        title: "Sign in to <br> your Account"
      }
    };
  }
};
</script>
<style scoped>
#account .login-info {
  padding: 4rem 6rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px dotted #ccc;
  grid-gap: 2.5rem;
}

#account .login-info .left {
  font-family: "Poppins", sans-serif;
  padding: 0.8rem;
  border-left: 1.4px solid #ccc;
  border-right: 1.4px solid #ccc;
  padding-left: 2rem;
}

#account .login-info .left h3 {
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 2px;
}

#account .login-info .left p {
  margin-bottom: 1rem;
  width: 70%;
}

#account .login-info .right {
  font-family: "Quicksand", sans-serif;
  color: #111;
}

#account .login-info .right .info {
  margin: 1rem 0;
}

#account .login-info .right .info h3 {
  font-size: 1.3rem;
}

#account .login-info .right .info p {
  margin: 0.2rem 0;
}

#account .login-info .right .info p a {
  color: inherit;
}

#account .login-info .right .info p a:hover {
  color: #019875;
}
</style>
