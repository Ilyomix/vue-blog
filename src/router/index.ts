import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'src/views/Login/Login.vue';
import Blog from 'src/views/Blog/Blog.vue';
import CreatePost from 'src/views/CreatePost/CreatePost.vue';
import EditPost from 'src/views/EditPost/EditPost.vue';
import { state } from 'src/store/login';

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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePost,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/edit-post',
    name: 'edit-post',
    component: EditPost,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (state.userSessionState.logged) {
      next();
      return;
    }
    router.push({ name: 'login' });
  } else {
    next();
  }

  if (to.matched.some(record => record.name === 'login')) {
    if (state.userSessionState.logged) {
      router.push({ name: 'blog' });
    }
  }
});

export default router;
