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
import CirculationComponent from '../components/Page/admin/Circulation';
import MasterComponent from '../components/Page/admin/Master';
import GMDComponent from '../components/Page/admin/master/GMD';
import PublisherComponent from '../components/Page/admin/master/Publisher';
import AuthorComponent from '../components/Page/admin/master/Author';
import SubjectComponent from '../components/Page/admin/master/Subject';
import LocationComponent from '../components/Page/admin/master/Location';
import PlaceComponent from '../components/Page/admin/master/Place';
import ItemStatusComponent from '../components/Page/admin/master/ItemStatus';
import CollectionTypeComponent from '../components/Page/admin/master/CollectionType';
import LanguageComponent from '../components/Page/admin/master/Language';
import CirculationSearchComponent from '../components/Page/admin/CirculationSearch';
import CirculationTransactionComponent from '../components/Page/admin/CirculationTransaction';

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
        path: 'circulation',
        component: CirculationComponent,
        name: 'circulation',
        redirect: { name: 'circulationPrime' },
        children: [
          {
            path: '/',
            component: CirculationSearchComponent,
            name: 'circulationPrime',
            meta: {
              title: putTitle('Circulation'),
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
            path: 'user',
            component: CirculationTransactionComponent,
            name: 'circulationTransaction',
            meta: {
              title: putTitle('Circulation Transaction'),
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
          },
          {
            path: 'subject',
            component: SubjectComponent,
            name: 'subject',
            meta: {
              title: putTitle('Subject'),
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
            path: 'location',
            component: LocationComponent,
            name: 'location',
            meta: {
              title: putTitle('Location'),
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
            path: 'place',
            component: PlaceComponent,
            name: 'place',
            meta: {
              title: putTitle('Place'),
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
            path: 'item-status',
            component: ItemStatusComponent,
            name: 'itemStatus',
            meta: {
              title: putTitle('Item Status'),
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
            path: 'collection',
            component: CollectionTypeComponent,
            name: 'collection',
            meta: {
              title: putTitle('Collection Type'),
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
            path: 'language',
            component: LanguageComponent,
            name: 'language',
            meta: {
              title: putTitle('Language'),
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
