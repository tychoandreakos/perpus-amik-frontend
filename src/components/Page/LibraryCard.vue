<template>
  <section id="library-card">
    <NavbarComponent />
    <HeroComponent
      :propsInfo="panelInfo"
      :propsButtonEnabled="false"
      :propsHero="hero"
      :propsPanel="panel"
      :propsTitle="titleHero"
    />
    <div class="library-card">
      <div class="left">
        <template v-for="(link, i) in linkPanel">
          <a :href="link.href" :key="i">{{ link.title }}</a>
        </template>
      </div>
      <div class="right">
        <CardComponent
          class="card-component"
          style="margin: 0 10rem"
          :title="cardInformation.title"
          :description="cardInformation.desc"
          :button="cardInformation.buttonElem"
          :fontSize="'fontSize: 2.6rem'"
        />
        <div class="borrow">
          <h3 class="h3">General Borrowing FAQs</h3>
          <DropdownComponent
            v-for="(data, i) in dropdownData"
            :info="data"
            :key="i"
          />
        </div>

        <div class="borrow">
          <h3 class="h3">Renewal Card</h3>
          <DropdownComponent
            v-for="(data, i) in renewal"
            :info="data"
            :key="i"
          />
        </div>
      </div>
    </div>
    <FooterComponent />
  </section>
</template>
<script>
import CardComponent from "../UI/Card";
import NavbarComponent from "../UI/Navbar";
import HeroComponent from "../UI/Hero";
import DropdownComponent from "../UI/Dropdown";
import FooterComponent from "../UI/Footer";

const regist = {
  name: "signup"
};

export default {
  name: "LibraryCard",
  components: {
    NavbarComponent,
    HeroComponent,
    DropdownComponent,
    FooterComponent,
    CardComponent
  },
  data() {
    return {
      renewal: [
        {
          title: "How do i renew?",
          description:
            "Cards do expire and each type of card has a different expiration date. An expired card cannot be used to borrow materials or use any of the online or telephone services. The expiration date is on the card, and displays below your name when you view your account online. To renew your library card, bring your card and appropriate identification to the Library."
        },
        {
          title: "Do I Need have my library card number to renew?",
          description:
            "Cards do expire and each type of card has a different expiration date. An expired card cannot be used to borrow materials or use any of the online or telephone services. The expiration date is on the card, and displays below your name when you view your account online. To renew your library card, bring your card and appropriate identification to the Library."
        }
      ],
      dropdownData: [
        {
          title: "Who may get a free Greenwich Library Card?",
          description:
            "Cards do expire and each type of card has a different expiration date. An expired card cannot be used to borrow materials or use any of the online or telephone services. The expiration date is on the card, and displays below your name when you view your account online. To renew your library card, bring your card and appropriate identification to the Library."
        },
        {
          title: "What if i do not live in greenwich",
          description:
            "Cards do expire and each type of card has a different expiration date. An expired card cannot be used to borrow materials or use any of the online or telephone services. The expiration date is on the card, and displays below your name when you view your account online. To renew your library card, bring your card and appropriate identification to the Library."
        },
        {
          title: "What id i do not live in Connecticut?",
          description:
            "Cards do expire and each type of card has a different expiration date. An expired card cannot be used to borrow materials or use any of the online or telephone services. The expiration date is on the card, and displays below your name when you view your account online. To renew your library card, bring your card and appropriate identification to the Library."
        }
      ],
      panel: {
        width: "32%",
        padding: "4rem",
        height: "38%"
      },
      titleHero: {
        fontSize: "2.9rem",
        lineHeight: "50px",
        borderBottom: "0"
      },
      hero: {
        height: "40vh",
        background:
          "url('https://www.greenwichlibrary.org/wp-content/uploads/2016/04/Pattern-BG-About.svg') center/cover no-repeat fixed"
      },
      panelInfo: {
        title: "Get a Library <br> Card"
      },
      cardInformation: {
        title: "Register for a Library Card",
        desc: "Click through the link to sign up for a Library card online.",
        buttonElem: {
          title: "Registrasi Sekarang",
          href: regist
        }
      },
      linkPanel: [
        {
          href: "#",
          title: "Get a Library Card"
        },
        {
          href: "#",
          title: "Borrowing FAQs"
        },
        {
          href: "#",
          title: "Renewals"
        },
        {
          href: "#",
          title: "Get a Library Card"
        },
        {
          href: "#",
          title: "Borrowing FAQs"
        },
        {
          href: "#",
          title: "Renewals"
        },
        {
          href: "#",
          title: "Get a Library Card"
        },
        {
          href: "#",
          title: "Borrowing FAQs"
        },
        {
          href: "#",
          title: "Renewals"
        }
      ]
    };
  }
};
</script>
<style>
#library-card .library-card {
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 2rem;
  position: relative;
}

#library-card .library-card .left {
  margin: 0 4rem;
  height: 320px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  padding: 0.9rem 0.9rem 0.9rem 0;
}

#library-card .library-card .left a {
  text-decoration: none;
  margin: 0.6rem 0;
  color: #494949;
}

#library-card .library-card .left a:hover {
  color: #f2ba7a;
}

#library-card .library-card .right .borrow {
  margin-top: 2rem;
}

#library-card .library-card .right .borrow .h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  border-bottom: 2px solid #4db79f;
  padding-bottom: 0.3rem;
  display: inline-block;
}
</style>
