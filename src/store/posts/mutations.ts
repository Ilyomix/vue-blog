import { MutationTree } from 'vuex';
import {
  PostsState,
  QUERY_POSTS,
  UPDATE_BLOG_REQUEST_STATE,
  CHANGE_ARTICLES_PAGE,
  SET_NAVIGATION_CONFIGURATION,
  NOTIFICATION_MESSAGE,
  IPosts,
} from './types';
import articlesPerPage from 'src/constants/blog/navigation/navigation';

const mutations: MutationTree<PostsState> = {
  [UPDATE_BLOG_REQUEST_STATE](
    state: PostsState,
    res: {
      stateKey: string;
      stateValue: boolean;
      message: Response;
      errorMessage: Error
    },
  ) {
    const {
      stateKey,
      stateValue,
      message,
      errorMessage,
    } = res;

    state.blogRequestState.requestState[stateKey] = stateValue;
    state.blogRequestState.message = (message && message.statusText)
      || (errorMessage && errorMessage.message)
      || '';
  },
  [QUERY_POSTS](state: PostsState, posts: IPosts[]) {
    state.posts = posts;
  },
  [SET_NAVIGATION_CONFIGURATION](state: PostsState, nbArticles: number) {
    state.navigation.lastPage = Math.ceil(nbArticles / articlesPerPage);
    state.navigation.canJumpNextPage = state.navigation.start + 1 <= state.navigation.lastPage;
    state.navigation.canJumpFirstPage = state.navigation.start > 1;
    state.navigation.canJumpPrevPage = state.navigation.start - 1 > 0;
    state.navigation.canJumpLastPage = state.navigation.start < state.navigation.lastPage;
  },
  [CHANGE_ARTICLES_PAGE](state: PostsState, page: number) {
    state.navigation.start = page;
  },
  [NOTIFICATION_MESSAGE](state: PostsState, content: string) {
    state.notificationMessage = content;
  }
};

export default mutations;
