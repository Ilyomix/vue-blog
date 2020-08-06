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
  navigation: {
    start: 1,
    lastPage: 1,
    canJumpNextPage: true,
    canJumpNextFivePage: true,
    canJumpPrevPage: true,
    canJumpPrevFivePage: true,
  },
};

const namespaced: boolean = true;

export const module: Module<PostsState, {}> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
