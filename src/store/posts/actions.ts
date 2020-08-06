import { ActionTree } from 'vuex';
import {
  getPosts,
  updatePostReq,
  deletePostReq,
} from './callers';

import {
  PostsState,
  QUERY_POSTS,
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
  SET_NAVIGATION_CONFIGURATION,
  UPDATE_BLOG_REQUEST_STATE,
  CHANGE_ARTICLES_PAGE,
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
  // [UPDATE_POST]({ commit }, page: number) {
  //   commit(UPDATE_POST, page);
  // },
  [CREATE_POST](
    { commit },
    content: {
      title: string,
      body: string,
    },
  ) {
    return updatePostReq(content);
  },
};

export default actions;
