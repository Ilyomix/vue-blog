
import { GetterTree } from 'vuex';

import {
  LoginState,
  ILoginRequestState,
  IUserSessionState,
} from './types';

const getters: GetterTree<LoginState, {}> = {
  getLoginRequestState(state: LoginState): ILoginRequestState {
    return state.loginRequestState;
  },
  getUserSessionState(state: LoginState): IUserSessionState {
    return state.userSessionState;
  },
};

export default getters;
