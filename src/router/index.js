import Vue from 'vue';
import VueRouter from 'vue-router';

import mainLayout from '@/views/MainLayout';

import partnersCatalog from '@/views/PartnersCatalog';

import buildBaths from '@/views/Building/BuildBaths';
import buildHouses from '@/views/Building/BuildHouses';
import buildFoundations from '@/views/Building/BuildFoundations';

import services from '@/views/Services';
import designing from '@/views/Services/Designing';
import borders from '@/views/Services/Borders';
import water from '@/views/Services/Water';
import landscape from '@/views/Services/Landscape';
import smarthouse from '@/views/Services/SmartHouse';

import portfolio from '@/views/v2/Portfolio';

import about from '@/views/About';
import aboutTerms from '@/views/v2/AboutTerms';
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
      component: buildBaths,
    },
    {
      path: '/partners',
      // name : 'partners',
      component: partnersCatalog,
    },
    {
      path: '/houses',
      // name : 'houses',
      component: buildHouses,
    },
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
      path: '/designing',
      // name : 'designing',
      component: designing,
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
});

export default router;
