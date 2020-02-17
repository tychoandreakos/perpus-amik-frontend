import LandingComponent from '../components/Page/Landing';
import AccountComponent from '../components/Page/Account';
import SigninComponent from '../components/Page/Signin';
import LibraryCardComponent from '../components/Page/LibraryCard';
import SignupComponent from '../components/Page/Signup';
import UserComponent from '../components/Page/user/Homepage';
import ResultComponent from '../components/Page/user/Result';

// children
import FirstPage from '../components/Page/user/FirstPage';
import InSearchComponent from '../components/Page/user/InSearch';

const title = 'Diglib STMIK AMIK BANDUNG';

const putTitle = pageTitle => {
  return `${pageTitle} - ${title}`;
};

const router = [
  {
    path: '/',
    name: 'landing',
    component: LandingComponent,
    meta: {
      title,
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    }
  },
  {
    path: '/account',
    name: 'account',
    component: AccountComponent,
    meta: {
      title: putTitle('Account'),
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninComponent,
    meta: {
      title: putTitle('Sign in'),
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    }
  },
  {
    path: '/library-card',
    component: LibraryCardComponent,
    name: 'libraryCard',
    meta: {
      title: putTitle('Library Card'),
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    }
  },
  {
    path: '/registrasi',
    component: SignupComponent,
    name: 'signup',
    meta: {
      title: putTitle('Registrasi'),
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    }
  },
  {
    path: '/home',
    component: UserComponent,
    name: 'homepage',
    redirect: '/home',
    children: [
      {
        path: '/',
        component: FirstPage,
        name: 'firstPage',
        meta: {
          title: putTitle('Home'),
          metaTags: [
            {
              name: 'description',
              content: 'The about page of our example app.'
            },
            {
              property: 'og:description',
              content: 'The about page of our example app.'
            }
          ]
        }
      },
      {
        path: 'search',
        component: InSearchComponent,
        name: 'search',
        meta: {
          title: putTitle('Search'),
          metaTags: [
            {
              name: 'description',
              content: 'The about page of our example app.'
            },
            {
              property: 'og:description',
              content: 'The about page of our example app.'
            }
          ]
        }
      }
    ]
  },
  {
    path: '/library-result',
    component: ResultComponent,
    name: 'result',
    meta: {
      title: putTitle('Result'),
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    }
  }
];

export default router;
