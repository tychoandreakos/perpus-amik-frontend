<template>
  <section
    id="panel"
    :style="[this.showPanel ? { height: '96vh' } : { height: '0' }]"
  >
    <div class="panel-menu">
      <ul
        :style="
          this.showPanel
            ? { background: panelData[this.dataMenu].panelLeft }
            : { background: panelData[this.oldMenu].panelLeft }
        "
        class="panel-left"
      >
        <li v-for="(link, i) in panelLink" :key="i">
          <a :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
      <div
        :style="
          this.showPanel
            ? { background: panelData[this.dataMenu].panelRight }
            : { background: panelData[this.oldMenu].panelRight }
        "
        class="panel-right"
      >
        <div class="card" v-for="(panel, i) in news" :key="i">
          <a :href="panel.href">
            <div class="img">
              <div
                :style="{ background: 'url(' + panel.img + ')' }"
                class="img-frame"
              ></div>
            </div>
          </a>
          <div class="text-card">
            <h3>{{ panel.title }}</h3>
            <p>{{ panel.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Panel",
  props: ["showPanel", "dataMenu", "oldMenu"],
  data() {
    return {
      panelLink: [
        { name: "Calendar", href: "#" },
        { name: "AuthorsLive", href: "#" },
        { name: "Greenwich Reads Together", href: "#" },
        { name: "STEAM Learning", href: "#" },
        { name: "Book Groups", href: "#" },
        { name: "Concerts", href: "#" },
        { name: "Friends Friday Films" }
      ],

      panelData: {
        default: {},
        Visit: {
          panelLeft: "#e086a6",
          panelRight: "#d2527f"
        },
        Explore: {
          panelLeft: "#f2ba7a",
          panelRight: "#eb9532"
        },
        Learn: {
          panelLeft: "#78d5ff",
          panelRight: "#1db9ff"
        },
        Support: {
          panelLeft: "#7c98ca",
          panelRight: "#446cb3"
        },
        ReImagine: {
          panelLeft: "#88be7f",
          panelRight: "#009a4e"
        },
        About: {
          panelLeft: "#83cdbc",
          panelRight: "#4db79f"
        },
        Help: {
          panelLeft: "#e76d69",
          panelRight: "#d91e18"
        }
      },

      news: [
        {
          img:
            "https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/TTC.png",
          title: "AuthorsLive",
          href: "#",
          description:
            "Discover new books, talk to authors about their work, and meet other book lovers? in the community."
        },
        {
          img:
            "https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/TTC.png",
          title: "AuthorsLive",
          href: "#",
          description:
            "Discover new books, talk to authors about their work, and meet other book lovers? in the community."
        },
        {
          img:
            "https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/TTC.png",
          title: "AuthorsLive",
          href: "#",
          description:
            "Discover new books, talk to authors about their work, and meet other book lovers? in the community."
        },
        {
          img:
            "https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/TTC.png",
          title: "AuthorsLive",
          href: "#",
          description:
            "Discover new books, talk to authors about their work, and meet other book lovers? in the community."
        }
      ]
    };
  }
};
</script>
<style scoped>
#panel {
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

#panel .panel-menu {
  width: inherit;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

#panel .panel-left {
  padding: 2rem 3rem;
  list-style: none;
}

#panel .panel-left li {
  padding: 0.4rem 0;
}

#panel .panel-left li a {
  color: #fff;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  padding-bottom: 0.2rem;
}

#panel .panel-left li a:before {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  border-bottom: 1.8px solid #fff;
  transition: padding-right 0.7s ease-in;
}

#panel .panel-left li a:hover::before {
  padding-right: 100%;
}

#panel .panel-right {
  padding: 2rem 3.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  max-width: 100%;
}

#panel .panel-right .card a {
  display: inline-block;
}

#panel .panel-right .img {
  height: 180px;
  width: 350px;
  overflow: hidden;
}

#panel .panel-right .img-frame {
  height: 100%;
  width: 100%;
  background-position: center !important;
  background-size: cover !important;
  transition: transform 1s, filter 1s ease-in-out;
  filter: blur(0.2px);
  transform: scale(1.2);
}

#panel .panel-right .card .text-card {
  padding-top: 1rem;
  font-family: "Poppins", sans-serif;
  color: #fff;
}

#panel .panel-right .card .text-card h3 {
  font-weight: 400;
}

#panel .panel-right .card .text-card p {
  font-size: 0.9rem;
}

#panel .panel-right .card a:hover .img-frame {
  filter: blur(0);
  transform: scale(1);
}
</style>
