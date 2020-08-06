import { namespace as createVuexClass } from 'vuex-class';

export const namespace = 'posts';
export const store = createVuexClass(namespace);

export const QUERY_POSTS = 'queryPosts';
export const UPDATE_BLOG_REQUEST_STATE = 'updateBlogRequestState';

export interface IBlogRequestState {
  requestState: {
    loading: false,
    fetched: false,
    error: false,
    [key: string]: boolean,
  };
  message: string;
}

export interface IPosts {
  '@id': number;
  '@type': string;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: IPosts[];
  blogRequestState: IBlogRequestState;
}
