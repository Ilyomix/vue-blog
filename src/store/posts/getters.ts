
import { GetterTree } from 'vuex';

import {
  PostsState,
  IPosts,
  IBlogRequestState,
  IEditPost,
} from './types';

const getters: GetterTree<PostsState, {}> = {
  getPosts(state: PostsState): IPosts[] {
    return state.posts;
  },
  getBlogRequestState(state: PostsState): IBlogRequestState {
    return state.blogRequestState;
  },
  getNotificationMessage(state: PostsState): string {
    return state.notificationMessage;
  },
  getPostToEdit(state: PostsState): IEditPost {
    return state.editPost.content;
  },
  isBlogViewIsLoading(state: PostsState): boolean {
    return state.blogRequestState.requestState.loading;
  },
  isBlogViewIsfetched(state: PostsState): boolean {
    return state.blogRequestState.requestState.fetched;
  },
  isBlogViewHasError(state: PostsState): boolean {
    return state.blogRequestState.requestState.error;
  },
  getBlogViewErrorMessage(state: PostsState): string {
    return state.blogRequestState.message;
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
  canJumpLastPage(state: PostsState): boolean {
    return state.navigation.canJumpLastPage;
  },
  canJumpPrevPage(state: PostsState): boolean {
    return state.navigation.canJumpPrevPage;
  },
  canJumpFirstPage(state: PostsState): boolean {
    return state.navigation.canJumpFirstPage;
  },
};

export default getters;
