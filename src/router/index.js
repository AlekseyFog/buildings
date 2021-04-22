import Vue from 'vue';
import VueRouter from 'vue-router';
import mainLayout from '@/views/MainLayout';
import contacts from '@/views/Contacts';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      // name : 'home',
      component: mainLayout,
    },
    {
      path: '/contacts',
      // name : 'houses',
      component: contacts,
    },
    {
      path: '/contacts',
      // name : 'houses',
      component: contacts,
    },
  ],
});

export default router;
