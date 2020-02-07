import LandingComponent from "../src/components/Page/Landing";
import AccountComponent from "../src/components/Page/Account";

const title = "Diglib STMIK AMIK BANDUNG";

const putTitle = pageTitle => {
  return `${pageTitle} - ${title}`;
};

const router = [
  {
    path: "/",
    name: "landing",
    component: LandingComponent,
    meta: {
      title,
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        }
      ]
    }
  },
  {
    path: "/account",
    name: "Account",
    component: AccountComponent,
    meta: {
      title: putTitle("Account"),
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app."
        },
        {
          property: "og:description",
          content: "The about page of our example app."
        }
      ]
    }
  }
];

export default router;
