import LandingComponent from "../components/Page/Landing";
import AccountComponent from "../components/Page/Account";
import SigninComponent from "../components/Page/Signin";
import LibraryCardComponent from "../components/Page/LibraryCard";
import SignupComponent from "../components/Page/Signup";
import UserComponent from "../components/Page/user/Homepage";

// children
import PanelUserComponent from "../components/UI/user/Panel";

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
    path: "/library-card",
    component: LibraryCardComponent,
    name: "libraryCard",
    meta: {
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
  },
  {
    path: "/registrasi",
    component: SignupComponent,
    name: "signup",
    meta: {
      title: putTitle("Registrasi"),
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
    path: "/home",
    component: UserComponent,
    name: "homepage",
    meta: {
      title: putTitle("Home"),
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
    },
    children: [
      {
        path: "/",
        component: PanelUserComponent,
        name: "panel"
      }
    ]
  }
];

export default router;
