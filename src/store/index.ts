import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { module as login } from './login';
import { module as posts } from './posts';

Vue.use(Vuex);

const store: StoreOptions<{}> = {
  modules: {
    login,
    posts,
  },
};

export default new Vuex.Store<{}>(store);
