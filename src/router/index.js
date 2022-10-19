import Vue from 'vue';
import VueRouter from 'vue-router';
import Base from '@/views/Layout/Base.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Base,
    meta: { requiresAuth: true },
    children: [
      // {
      //   path: '/',
      //   name: 'Landing',
      //   component: () => import('@/views/Landing.vue'),
      // },
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/event',
        name: 'Event',
        component: () => import('@/views/IndivEvent.vue'),
      },

    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.Base,
  routes,
});

export default router;
