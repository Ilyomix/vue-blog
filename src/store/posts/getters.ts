
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
  },
  getCurrentArticlePage(state: PostsState): number {
    return state.navigation.start;
  },
  getArticlesLastPage(state: PostsState): number {
    return state.navigation.lastPage;
  },
  canJumpNextPage(state: PostsState): boolean {
    return state.navigation.canJumpNextPage;
  },
  canJumpNextFivePages(state: PostsState): boolean {
    return state.navigation.canJumpNextFivePage;
  },
  canJumpPrevPage(state: PostsState): boolean {
    return state.navigation.canJumpPrevPage;
  },
  canJumpPrevFivePages(state: PostsState): boolean {
    return state.navigation.canJumpPrevFivePage;
  },
};

export default getters;
