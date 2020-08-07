import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.use(VueResource);

Vue.http.interceptors.push((request: any, next: any) => {
  if (localStorage['user-token']) {
    request.headers.set('X-Authorization-Token', localStorage['user-token']);
  }

  next((response: any) => {
    if (response.status === 401) {
      localStorage.removeItem('user-token');
      window.location.replace('/login');
    }
  });
});

axios.interceptors.response.use((response: any) => {
  return response;
}, (res: any) => {
  if (res.response && res.response.status === 401) {
    window.location.replace('/login');
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
