import { createRouter, createWebHistory } from 'vue-router';
import FirstPageVue from '../pages/FirstPage.vue';
import SecondPageVue from '../pages/SecondPage.vue';
import ThirdPageVue from '../pages/ThirdPage.vue';

const routes = [
    {
      path: '/first',
      name: 'FirstPage',
      component: FirstPageVue
    },
    {
      path: '/second',
      name: 'SecondPage',
      component: SecondPageVue
    },
    {
      path: '/third',
      name: 'ThirdPage',
      component: ThirdPageVue
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;