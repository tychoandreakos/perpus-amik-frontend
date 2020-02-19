import LandingComponent from '../components/Page/Landing';
import AccountComponent from '../components/Page/Account';
import SigninComponent from '../components/Page/Signin';
import LibraryCardComponent from '../components/Page/LibraryCard';
import SignupComponent from '../components/Page/Signup';
import UserComponent from '../components/Page/user/Homepage';
import ResultComponent from '../components/Page/user/Result';
import ReadBookComponent from '../components/Page/user/ReadBook';

// admin component
import AdminComponent from '../components/Page/admin/HomepageAdmin';

// children
import FirstPage from '../components/Page/user/FirstPage';
import InSearchComponent from '../components/Page/user/InSearch';
import DashboardAdmin from '../components/Page/admin/Dashboard';
import BibliobigrafiComponent from '../components/Page/admin/Bibliobigrafi';
import MembershipComponent from '../components/Page/admin/Membership';
import MasterComponent from '../components/Page/admin/Master';
import GMDComponent from '../components/Page/admin/master/GMD';
import PublisherComponent from '../components/Page/admin/master/Publisher';
import AuthorComponent from '../components/Page/admin/master/Author';

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
    path: '/result',
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
  },
  {
    path: '/book',
    component: ReadBookComponent,
    name: 'bookView',
    meta: {
      title: putTitle('Read'),
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
    path: '/admin',
    component: AdminComponent,
    name: 'admin',
    children: [
      {
        path: '/',
        component: DashboardAdmin,
        name: 'dashboard',
        meta: {
          title: putTitle('Dashboard Admin'),
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
        path: 'bibliobigrafi',
        component: BibliobigrafiComponent,
        name: 'bibliobigrafi',
        meta: {
          title: putTitle('Bibliobigrafi'),
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
        path: 'membership',
        component: MembershipComponent,
        name: 'membership',
        meta: {
          title: putTitle('Membership'),
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
        path: 'master',
        component: MasterComponent,
        name: 'master',
        redirect: { name: 'dashboard' },
        children: [
          {
            path: 'gmd',
            component: GMDComponent,
            name: 'gmd',
            meta: {
              title: putTitle('GMD'),
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
            path: 'publisher',
            component: PublisherComponent,
            name: 'publisher',
            meta: {
              title: putTitle('Publisher'),
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
            path: 'author',
            component: AuthorComponent,
            name: 'author',
            meta: {
              title: putTitle('Author'),
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
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    meta: {
      title: putTitle('Not Found'),
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
