import Vue from 'vue';
import VueRouter from 'vue-router';

import mainLayout from '@/views/MainLayout';

import buildBaths from '@/views/Building/BuildBaths';
import buildFoundations from '@/views/Building/BuildFoundations';

import services from '@/views/Services/Services';
import borders from '@/views/Services/Borders';
import water from '@/views/Services/Water';
import landscape from '@/views/Services/Landscape';
import smarthouse from '@/views/Services/SmartHouse';

import portfolio from '@/views/about/Portfolio';

import about from '@/views/about/About';
import aboutTerms from '@/views/v2/AboutTerms';
import reviews from '@/views/about/Reviews';

import contacts from '@/views/about/Contacts';

import houses from './house';

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
      component: buildBaths,
    },
    ...houses,
    {
      path: '/foundations',
      // name : 'foundations',
      component: buildFoundations,
    },

    {
      path: '/services',
      // name : 'services',
      component: services,
    },
    {
      path: '/borders',
      // name : 'borders',
      component: borders,
    },
    {
      path: '/water',
      // name : 'water',
      component: water,
    },
    {
      path: '/landscape',
      // name : 'landscape',
      component: landscape,
    },
    {
      path: '/smarthouse',
      // name : 'smarthouse',
      component: smarthouse,
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
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
