import { MutationTree } from 'vuex';
import {
  PostsState,
  QUERY_POSTS,
  UPDATE_BLOG_REQUEST_STATE,
  IPosts,
} from './types';

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
};

export default mutations;
