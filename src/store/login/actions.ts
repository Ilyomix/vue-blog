import { ActionTree } from 'vuex';
import {
  loginApiCaller,
} from './callers';

import {
  LoginState,
  QUERY_LOGIN,
  DISCONNECT_USER,
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

        if (data) {
          localStorage.setItem('user-token', data.token);
        }
        commit(UPDATE_USER_SESSION_STATE, {
          token: data.token,
          logged: res.ok,
        });

        if (res && !res.ok) {
          localStorage.removeItem('user-token');
        }

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
        localStorage.removeItem('user-token');

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
  [DISCONNECT_USER]({ commit }) {
    localStorage.removeItem('user-token');
    commit(UPDATE_USER_SESSION_STATE, {
      token: '',
      logged: false,
    });
  },
};

export default actions;
