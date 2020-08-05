import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from 'src/views/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/blog',
    name: 'redirect-default',
    component: HelloWorld,
  },
  {
    path: '/',
    redirect: '/blog',
    name: 'default',
    component: HelloWorld,
  },
  {
    path: '/login',
    name: 'login',
    component: HelloWorld,
  },
  {
    path: '/blog',
    name: 'blog',
    component: HelloWorld,
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: HelloWorld,
  },
  {
    path: '/edit-post',
    name: 'edit-post',
    component: HelloWorld,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
