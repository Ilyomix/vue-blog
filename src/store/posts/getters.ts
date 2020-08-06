
import { GetterTree } from 'vuex';

import {
  PostsState,
  IPosts,
  IBlogRequestState,
} from './types';

const getters: GetterTree<PostsState, {}> = {
  getPosts(state: PostsState): IPosts[] {
    return state.posts;
  },
  getBlogRequestState(state: PostsState): IBlogRequestState {
    return state.blogRequestState;
  },
  isBlogViewIsLoading(state: PostsState): boolean {
    return state.blogRequestState.requestState.loading;
  },
  isBlogViewHasError(state: PostsState): boolean {
    return state.blogRequestState.requestState.error;
  }
};

export default getters;
