import { ActionTree } from 'vuex';
import {
  getPosts,
  createPostReq,
  updatePostReq,
  deletePostReq,
} from './callers';

import {
  PostsState,
  QUERY_POSTS,
  DELETE_POST,
  CREATE_POST,
  SAVE_POST_TO_UPDATE,
  UPDATE_POST,
  SET_NAVIGATION_CONFIGURATION,
  UPDATE_BLOG_REQUEST_STATE,
  CHANGE_ARTICLES_PAGE,
  NOTIFICATION_MESSAGE,
  IEditPost,
} from './types';

const actions: ActionTree<PostsState, {}> = {
  async [QUERY_POSTS]({ commit }, page: number) {
    commit(UPDATE_BLOG_REQUEST_STATE, {
      stateKey: 'loading',
      stateValue: true,
    });

    return getPosts(page)
      .then(async (res) => {
        commit(UPDATE_BLOG_REQUEST_STATE, {
          stateKey: 'fetched',
          stateValue: true,
        });
        commit(QUERY_POSTS, res.data['hydra:member']);
        commit(SET_NAVIGATION_CONFIGURATION, res.data['hydra:totalItems']);
        commit(UPDATE_BLOG_REQUEST_STATE, {
          stateKey: 'loading',
          stateValue: false,
        });
      })
      .catch((err: Error) => {
        commit(UPDATE_BLOG_REQUEST_STATE, {
          stateKey: 'error',
          stateValue: true,
        });

        commit(UPDATE_BLOG_REQUEST_STATE, {
          stateKey: 'loading',
          stateValue: false,
          errorMessage: err,
        });
      });
  },
  async [DELETE_POST]({ commit }, articleId: number) {
    commit(UPDATE_BLOG_REQUEST_STATE, {
      stateKey: 'loading',
      stateValue: true,
    });

    return deletePostReq(articleId)
      .then(async () => {
        commit(UPDATE_BLOG_REQUEST_STATE, {
          stateKey: 'fetched',
          stateValue: true,
        });

        commit(UPDATE_BLOG_REQUEST_STATE, {
          stateKey: 'loading',
          stateValue: false,
        });
      })
      .catch((err: Error) => {
        commit(UPDATE_BLOG_REQUEST_STATE, {
          stateKey: 'error',
          stateValue: true,
        });

        commit(UPDATE_BLOG_REQUEST_STATE, {
          stateKey: 'loading',
          stateValue: false,
          errorMessage: err,
        });
      });
  },
  [CHANGE_ARTICLES_PAGE]({ commit }, page: number) {
    commit(CHANGE_ARTICLES_PAGE, page);
  },
  async [UPDATE_POST](
    { commit },
    content: {
      title: string,
      content: string,
      id: number
    },
  ) {
    return updatePostReq(content).catch((err: Error) => { throw err; });
  },
  [SAVE_POST_TO_UPDATE]({ commit }, post: IEditPost) {
    commit(SAVE_POST_TO_UPDATE, post);
  },
  async [CREATE_POST](
    { commit },
    content: {
      title: string,
      content: string,
    },
  ) {
    return createPostReq(content).catch((err: Error) => { throw err; });
  },
  [NOTIFICATION_MESSAGE]({ commit }, content: string) {
    commit(NOTIFICATION_MESSAGE, content);
  },
};

export default actions;
