import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { module as login } from './login';

Vue.use(Vuex);

const store: StoreOptions<{}> = {
  modules: {
    login,
  },
};

export default new Vuex.Store<{}>(store);
