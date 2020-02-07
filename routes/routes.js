import LandingComponent from "../src/components/Page/Landing";
import AccountComponent from "../src/components/Page/Account";
import SigninComponent from "../src/components/Page/Signin";
import LibraryCardComponent from '../src/components/Page/LibraryCard';

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
    name: "account",
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
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninComponent,
    meta: {
      title: putTitle("Sign in"),
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
    path: '/library-card',
    component: LibraryCardComponent,
    name: 'libraryCard',
    title: putTitle("Library Card"),
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
];

export default router;
