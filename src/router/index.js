import Vue from 'vue';
import VueRouter from 'vue-router';
import mainLayout from '@/views/MainLayout';
import houseBlock from '@/views/HouseBlock';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      // name : 'home',
      component: mainLayout,
    },
    {
      path: '/houses',
      // name : 'houses',
      component: houseBlock,
    },
  ],
});

export default router;
