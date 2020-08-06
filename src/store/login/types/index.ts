import { namespace as createVuexClass } from 'vuex-class';

export const namespace = 'login';
export const store = createVuexClass(namespace);

export const QUERY_LOGIN = 'queryLogin';
export const UPDATE_LOGIN_REQUEST_STATE = 'updateLoginRequestState';
export const UPDATE_USER_SESSION_STATE = 'updatUserSessionState';

export interface ILoginRequestState {
  requestState: {
    loading: boolean,
    fetched: boolean,
    error: boolean,
    [key: string]: boolean,
  };
  message: Response;
}

export interface IUserSessionState {
  logged: boolean;
  token: string;
}

export interface LoginState {
  loginRequestState: ILoginRequestState;
  userSessionState: IUserSessionState;
}
