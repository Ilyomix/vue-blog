import { Module } from 'vuex';
import { LoginState } from './types';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export { namespace } from './types';

export const state: LoginState = {
  loginRequestState: {
    requestState: {
      loading: false,
      fetched: false,
      error: false,
    },
    message: '',
  },
  userSessionState: {
    logged: !!localStorage.getItem('user-token'),
    token: localStorage.getItem('user-token') || '',
  },
};

const namespaced: boolean = true;

export const module: Module<LoginState, {}> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
