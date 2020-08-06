import { MutationTree } from 'vuex';
import {
  LoginState,
  UPDATE_USER_SESSION_STATE,
  UPDATE_LOGIN_REQUEST_STATE,
} from './types';

const mutations: MutationTree<LoginState> = {
  [UPDATE_LOGIN_REQUEST_STATE](
    state: LoginState,
    res: {
      stateKey: string;
      stateValue: boolean;
      message: Response;
      errorMessage: Error
    }) {
    const {
      stateKey,
      stateValue,
      message,
      errorMessage,
    } = res;

    state.loginRequestState.requestState[stateKey] = stateValue;
    state.loginRequestState.message =
      (message && message.statusText) ||
      (errorMessage && errorMessage.message) ||
      '';
  },
  [UPDATE_USER_SESSION_STATE](state: LoginState, res) {
    state.userSessionState.token = res.data.token;
    state.userSessionState.logged = res && res.ok;
  },
};

export default mutations;
