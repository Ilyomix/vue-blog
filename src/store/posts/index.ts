import { Module } from 'vuex';
import { PostsState } from './types';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export { namespace } from './types';

export const state: PostsState = {
  blogRequestState: {
    requestState: {
      loading: false,
      fetched: false,
      error: false,
    },
    message: '',
  },
  posts: [],
};

const namespaced: boolean = true;

export const module: Module<PostsState, {}> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
