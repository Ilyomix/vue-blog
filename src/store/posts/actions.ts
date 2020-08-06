import { ActionTree } from 'vuex';
import {
  getPosts,
  deletePostReq,
} from './callers';

import {
  PostsState,
  QUERY_POSTS,
  DELETE_POST,
  UPDATE_BLOG_REQUEST_STATE,
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

        commit(QUERY_POSTS, res.data);

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
          stateKey: 'delete-article-loading',
          stateValue: false,
          errorMessage: err,
        });
      });
  },
};

export default actions;
