// User Component
import LandingComponent from '../components/Page/Landing';
import AccountComponent from '../components/Page/Account';
import SigninComponent from '../components/Page/Signin';
import LibraryCardComponent from '../components/Page/LibraryCard';
import SignupComponent from '../components/Page/Signup';
import UserComponent from '../components/Page/user/Homepage';
import ResultComponent from '../components/Page/user/Result';
import ReadBookComponent from '../components/Page/user/ReadBook';
import HistoryUserComponent from '../components/Page/user/History';

// admin component
import AdminComponent from '../components/Page/admin/HomepageAdmin';

// Bibliobigrafi
import BibliobigrafiComponent from '../components/Page/admin/Bibliobigrafi/Default';
import BibliobigrafiIndex from '../components/Page/admin/Bibliobigrafi/Index';
import BibliobigrafiInsert from '../components/Page/admin/Bibliobigrafi/Insert';

// membership
import MembershipComponent from '../components/Page/admin/Membership/Default';
import MembershipIndex from '../components/Page/admin/Membership/Index';
import InsertMembership from '../components/Page/admin/Membership/Insert';
import TrashMembership from '../components/Page/admin/Membership/Trash';

// children
import FirstPage from '../components/Page/user/FirstPage';
import InSearchComponent from '../components/Page/user/InSearch';
import DashboardAdmin from '../components/Page/admin/Dashboard';
import CirculationComponent from '../components/Page/admin/Circulation';
import MasterComponent from '../components/Page/admin/Master';
import GMDComponent from '../components/Page/admin/master/GMD';
import CirculationSearchComponent from '../components/Page/admin/CirculationSearch';
import CirculationTransactionComponent from '../components/Page/admin/CirculationTransaction';
import LoansComponent from '../components/Page/admin/Member/Loans';
import FinesComponent from '../components/Page/admin/Member/Fines';
import CurrentComponent from '../components/Page/admin/Member/Current';
import ReserveComponent from '../components/Page/admin/Member/Reserve';
import HistoryComponent from '../components/Page/admin/Member/History';
import TrashComponent from '../components/Page/admin/master/Trash';
import UpdateComponent from '../components/Page/admin/master/Update';

import { store } from '../store';
import { titleComponent, recycleMemberData } from '../store/module/API/type';

const title = 'Diglib STMIK AMIK BANDUNG';

const putTitle = (pageTitle) => {
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
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
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
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
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
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
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
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
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
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
  },
  {
    path: '/home',
    component: UserComponent,
    redirect: '/home',
    children: [
      {
        path: '/',
        component: FirstPage,
        name: 'homepage.firstPage',
        meta: {
          title: putTitle('Home'),
          metaTags: [
            {
              name: 'description',
              content: 'The about page of our example app.',
            },
            {
              property: 'og:description',
              content: 'The about page of our example app.',
            },
          ],
        },
      },
      {
        path: 'history',
        component: HistoryUserComponent,
        name: 'homepage.history',
        meta: {
          title: putTitle('History'),
          metaTags: [
            {
              name: 'description',
              content: 'The about page of our example app.',
            },
            {
              property: 'og:description',
              content: 'The about page of our example app.',
            },
          ],
        },
      },
      {
        path: 'search',
        component: InSearchComponent,
        name: 'homepage.search',
        meta: {
          title: putTitle('Search'),
          metaTags: [
            {
              name: 'description',
              content: 'The about page of our example app.',
            },
            {
              property: 'og:description',
              content: 'The about page of our example app.',
            },
          ],
        },
      },
    ],
  },
  {
    path: '/library/view/:isbn/:book',
    component: ResultComponent,
    name: 'result',
    meta: {
      title: putTitle('Result'),
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
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
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
  },
  {
    path: '/admin',
    component: AdminComponent,
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
              content: 'The about page of our example app.',
            },
            {
              property: 'og:description',
              content: 'The about page of our example app.',
            },
          ],
        },
      },
      {
        path: 'bibliobigrafi',
        component: BibliobigrafiComponent,
        children: [
          {
            path: '/',
            component: BibliobigrafiIndex,
            name: 'bibliobigrafi.index',
            meta: {
              title: putTitle('Bibliobigrafi'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'add',
            component: BibliobigrafiInsert,
            name: 'bibliobigrafi.add',
            meta: {
              title: putTitle('Add New Bibliobigrafi'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
        ],
      },
      {
        path: 'membership',
        component: MembershipIndex,
        children: [
          {
            path: '/',
            component: MembershipComponent,
            name: 'membership.index',
            beforeEnter(to, from, next) {
              const title = 'member';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Membership'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'member-type',
            name: 'memberType',
            component: GMDComponent,
            beforeEnter(to, from, next) {
              const title = 'Member-Type';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Membership Type'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'recycle',
            name: 'membership.recycle',
            component: TrashMembership,
            beforeEnter(to, from, next) {
              const title = 'member';
              store.commit(titleComponent, title);
              store.dispatch(recycleMemberData);
              next();
            },
            meta: {
              title: putTitle('Recycle Bin'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'update',
            name: 'membership.update',
            component: InsertMembership,
            beforeEnter(to, from, next) {
              const title = 'member';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Update Membership'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'add',
            name: 'membership.add',
            component: InsertMembership,
            beforeEnter(to, from, next) {
              const title = 'member';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Add New Membership'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
        ],
      },
      {
        path: 'circulation',
        component: CirculationComponent,
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
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'user',
            component: CirculationTransactionComponent,
            meta: {
              title: putTitle('Circulation Transaction'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
            children: [
              {
                path: '/',
                component: LoansComponent,
                name: 'loans',
                meta: { transitionName: 'slide' },
              },
              {
                path: 'fines',
                component: FinesComponent,
                name: 'fines',
                meta: { transitionName: 'slide' },
              },
              {
                path: 'history',
                component: HistoryComponent,
                name: 'history',
                meta: { transitionName: 'slide' },
              },
              {
                path: 'reserve',
                component: ReserveComponent,
                name: 'reserve',
                meta: { transitionName: 'slide' },
              },
              {
                path: 'current',
                component: CurrentComponent,
                name: 'current',
                meta: { transitionName: 'slide' },
              },
            ],
          },
        ],
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
            beforeEnter(to, from, next) {
              const title = 'GMD';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('GMD'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'publisher',
            component: GMDComponent,
            name: 'publisher',
            beforeEnter(to, from, next) {
              store.commit(titleComponent, 'Publisher');
              next();
            },
            meta: {
              title: putTitle('Publisher'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'author',
            component: GMDComponent,
            name: 'author',
            beforeEnter(to, from, next) {
              store.commit(titleComponent, 'Author');
              next();
            },
            meta: {
              title: putTitle('Author'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'subject',
            component: GMDComponent,
            name: 'subject',
            beforeEnter(to, from, next) {
              const title = 'Subject';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Subject'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'location',
            component: GMDComponent,
            name: 'location',
            beforeEnter(to, from, next) {
              const title = 'Location';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Location'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'place',
            component: GMDComponent,
            name: 'place',
            beforeEnter(to, from, next) {
              const title = 'Place';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Place'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'item-status',
            component: GMDComponent,
            name: 'itemStatus',
            beforeEnter(to, from, next) {
              const title = 'Item';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Item Status'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'collection',
            component: GMDComponent,
            name: 'collection',
            beforeEnter(to, from, next) {
              const title = 'Koleksi';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Collection Type'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'language',
            component: GMDComponent,
            name: 'language',
            beforeEnter(to, from, next) {
              const title = 'Bahasa';
              store.commit(titleComponent, title);
              next();
            },
            meta: {
              title: putTitle('Language'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'recycle',
            component: TrashComponent,
            name: 'gmd.recycle',
            meta: {
              title: putTitle('Recycle Bin'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
          {
            path: 'update',
            component: UpdateComponent,
            name: 'gmd.update',
            meta: {
              title: putTitle('Update GMD'),
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of our example app.',
                },
                {
                  property: 'og:description',
                  content: 'The about page of our example app.',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    name: 'notFound',
    meta: {
      title: putTitle('Not Found'),
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
  },
];
export default router;
