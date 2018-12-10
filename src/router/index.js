import Vue from 'vue';
import VueRouter from 'vue-router';
import System from '@/components/System.vue';
import Home from '@/components/system/container/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '',
      component: System,
      children: [
        {
          name: 'Home',
          path: '/',
          component: Home
        },
      ],
    },
  ],
});
