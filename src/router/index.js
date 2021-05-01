import Vue from 'vue';
import VueRouter from 'vue-router';

import mainLayout from '@/views/MainLayout';

import housesCatalog from '@/views/HouseCatalog';
import bathsCatalog from '@/views/BathsCatalog';
import basementCatalog from '@/views/BasementCatalog';

import designing from '@/views/Designing';

import portfolio from '@/views/Portfolio';

import about from '@/views/About';
import aboutTerms from '@/views/AboutTerms';
import reviews from '@/views/Reviews';

import contacts from '@/views/Contacts';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      // name : 'main',
      component: mainLayout,
    },

    {
      path: '/baths',
      // name : 'baths',
      component: bathsCatalog,
    },
    {
      path: '/houses',
      // name : 'houses',
      component: housesCatalog,
    },

    {
      path: '/designing',
      // name : 'designing',
      component: designing,
    },
    {
      path: '/basement',
      // name : 'basement',
      component: basementCatalog,
    },

    {
      path: '/portfolio',
      // name : 'portfolio',
      component: portfolio,
    },

    {
      path: '/about',
      // name : 'about',
      component: about,
    },
    {
      path: '/aboutTerms',
      // name : 'aboutTerms',
      component: aboutTerms,
    },
    {
      path: '/reviews',
      // name : 'reviews',
      component: reviews,
    },

    {
      path: '/contacts',
      // name : 'contacts',
      component: contacts,
    },

  ],
});

export default router;
