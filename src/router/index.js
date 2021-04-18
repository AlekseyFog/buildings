import Vue from 'vue';
import VueRouter from 'vue-router';
import mainLayout from '@/views/MainLayout';
import houseGazbeton from '@/views/HouseGazbeton';
import houseBrick from '@/views/HouseBrick';
import houseGlue from '@/views/HouseBrusGlue';
import houseProf from '@/views/HouseBrusProf';
import baths from '@/views/Baths';
import contacts from '@/views/Contacts';
import foundation from '@/views/Foundation';
import services from '@/views/Services';
import reviews from '@/views/Reviews';
import about from '@/views/About';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      // name : 'home',
      component: mainLayout,
    },
    {
      path: '/houses-gb',
      // name : 'houses',
      component: houseGazbeton,
    },
    {
      path: '/houses-br',
      // name : 'houses',
      component: houseBrick,
    },
    {
      path: '/houses-gl',
      // name : 'houses',
      component: houseGlue,
    },
    {
      path: '/houses-pr',
      // name : 'houses',
      component: houseProf,
    },
    {
      path: '/baths',
      // name : 'houses',
      component: baths,
    },
    {
      path: '/foundation',
      // name : 'houses',
      component: foundation,
    },
    {
      path: '/services',
      // name : 'houses',
      component: services,
    },
    {
      path: '/about',
      // name : 'houses',
      component: about,
    },
    {
      path: '/reviews',
      // name : 'houses',
      component: reviews,
    },
    {
      path: '/contacts',
      // name : 'houses',
      component: contacts,
    },
  ],
});

export default router;
