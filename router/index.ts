import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'src/views/Login/Login.vue';
import Blog from 'src/views/Blog/Blog.vue';
import CreatePost from 'src/views/CreatePost/CreatePost.vue';
import EditPost from 'src/views/EditPost/EditPost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/blog',
    name: 'redirect-default',
    component: Blog,
  },
  {
    path: '/',
    redirect: '/blog',
    name: 'default',
    component: Blog,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePost,
  },
  {
    path: '/edit-post',
    name: 'edit-post',
    component: EditPost,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
