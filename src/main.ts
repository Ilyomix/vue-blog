import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.interceptors.push((request: any, next: any) => {
  if (localStorage['user-token']) {
    request.headers.set('X-Authorization-Token', localStorage['user-token']);
  }

  next((response: any) => {
    if (response.status === 401) {
      localStorage.removeItem('user-token');
      router.push({ name: '/login'});
    }
  });
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');