<template>
  <section id="footer">
    <div class="booklink">
      <div v-for="(link, i) in links" :key="i" class="links">
        <h3>{{ link.title }}</h3>
        <a
          v-for="(attach, i) in link.linkAttached"
          :key="i"
          :href="attach.href"
          >{{ attach.titleMenu }}</a
        >
      </div>
    </div>
    <div class="copyright">
      <div class="left">
        <img :src="image.imgOne" alt="logo" />
        <img :src="image.imgTwo" alt="logo2" />
      </div>
      <div class="right">
        <p>
          {{ copyright }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      image: {
        imgOne: "https://www.washoecountylibrary.us/_files/img/wcemblem.png",
        imgTwo: "https://www.washoecountylibrary.us/_files/img/wclfriends.png"
      },
      copyright: "Copyright Manisku Library System ©2020",
      links: [
        {
          title: "Location & Hourse",
          linkAttached: [
            {
              titleMenu: "Hours & Closures",
              href: "#"
            },
            {
              titleMenu: "Downton Reno",
              href: "#"
            },
            {
              titleMenu: "Duncan/Trainer",
              href: "#"
            },
            {
              titleMenu: "Gerlach",
              href: "#"
            },
            {
              titleMenu: "Incline Village",
              href: "#"
            }
          ]
        },
        {
          title: "Books & More",
          linkAttached: [
            {
              titleMenu: "Read Recent Reviews",
              href: "#"
            },
            {
              titleMenu: "Articles Search",
              href: "#"
            },
            {
              titleMenu: "e-Books & Audibooks",
              href: "#"
            },
            {
              titleMenu: "Digital Library",
              href: "#"
            },
            {
              titleMenu: "Catalog Search",
              href: "#"
            }
          ]
        },
        {
          title: "Resources",
          linkAttached: [
            {
              titleMenu: "Read Recent Reviews",
              href: "#"
            },
            {
              titleMenu: "Articles Search",
              href: "#"
            },
            {
              titleMenu: "e-Books & Audibooks",
              href: "#"
            },
            {
              titleMenu: "Digital Library",
              href: "#"
            },
            {
              titleMenu: "Catalog Search",
              href: "#"
            }
          ]
        },
        {
          title: "Services",
          linkAttached: [
            {
              titleMenu: "Read Recent Reviews",
              href: "#"
            },
            {
              titleMenu: "Articles Search",
              href: "#"
            },
            {
              titleMenu: "e-Books & Audibooks",
              href: "#"
            },
            {
              titleMenu: "Digital Library",
              href: "#"
            },
            {
              titleMenu: "Catalog Search",
              href: "#"
            }
          ]
        },
        {
          title: "About a Library",
          linkAttached: [
            {
              titleMenu: "Read Recent Reviews",
              href: "#"
            },
            {
              titleMenu: "Articles Search",
              href: "#"
            },
            {
              titleMenu: "e-Books & Audibooks",
              href: "#"
            },
            {
              titleMenu: "Digital Library",
              href: "#"
            },
            {
              titleMenu: "Catalog Search",
              href: "#"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
#footer {
  margin-top: 2rem;
}

#footer .booklink {
  display: flex;
  padding: 0 3.5rem;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
}

#footer .booklink .links h3 {
  font-weight: 400;
  font-size: 1.15rem;
  font-weight: 500;
}

#footer .booklink .links a {
  display: block;
  text-decoration: none;
  margin: 0.7rem 0;
  font-weight: 400;
  font-size: 0.9rem;
  color: #494949;
}

#footer .booklink .links a:hover {
  color: #eb9532;
}

#footer .copyright {
  background: #f4f5f8;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  margin-top: 1.5rem;
}

#footer .copyright .left img {
  width: 18%;
  margin: 0 0.4rem;
}

#footer .copyright .right p {
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
