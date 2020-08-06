import { ActionTree } from 'vuex';
import {
  loginApiCaller,
} from './callers';

import {
  LoginState,
  QUERY_LOGIN,
  UPDATE_LOGIN_REQUEST_STATE,
  UPDATE_USER_SESSION_STATE,
} from './types';

const actions: ActionTree<LoginState, {}> = {
  async [QUERY_LOGIN]({ commit }, credentials: {[key: string]: string}) {
    commit(UPDATE_LOGIN_REQUEST_STATE, {
      stateKey: 'loading',
      stateValue: true,
    });

    return loginApiCaller(credentials)
      .then(async (res) => {
        commit(UPDATE_LOGIN_REQUEST_STATE, {
          stateKey: 'fetched',
          stateValue: true,
        });

        const data = await res.json();

        commit(UPDATE_USER_SESSION_STATE, { data, ok: res.ok});

        commit(UPDATE_LOGIN_REQUEST_STATE, {
          stateKey: 'error',
          stateValue: res && !res.ok,
          message: res,
        });

        commit(UPDATE_LOGIN_REQUEST_STATE, {
          stateKey: 'loading',
          stateValue: false,
          message: res,
        });
      })
      .catch((err: Error) => {
        commit(UPDATE_LOGIN_REQUEST_STATE, {
          stateKey: 'error',
          stateValue: true,
        });

        commit(UPDATE_LOGIN_REQUEST_STATE, {
          stateKey: 'loading',
          stateValue: false,
          errorMessage: err,
        });
      });
  },
};

export default actions;
