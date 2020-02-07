import LandingComponent from "../src/components/Page/Landing";
import AccountComponent from "../src/components/Page/Account";

const router = [
  {
    path: "/",
    name: "landing",
    component: LandingComponent
  },
  {
    path: "/account",
    name: "Account",
    component: AccountComponent
  }
];

export default router;
