import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';

const Login = resolve => require(['@/components/login/Login'], resolve);
const Home = resolve => require(['@/components/home/Home'], resolve);
const Passage = resolve => require(['@/components/passage/Passage'], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/passage/:passageID',
      name: 'Passage',
      component: Passage,
    },
  ],
});
