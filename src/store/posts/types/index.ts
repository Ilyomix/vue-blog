import { namespace as createVuexClass } from 'vuex-class';

export const namespace = 'posts';
export const store = createVuexClass(namespace);

export const QUERY_POSTS = 'queryPosts';
export const DELETE_POST = 'deletePost';
export const UPDATE_POST = 'updatePost';
export const SAVE_POST_TO_UPDATE = 'savePostToUpdate';
export const CREATE_POST = 'createPost';
export const UPDATE_BLOG_REQUEST_STATE = 'updateBlogRequestState';
export const CHANGE_ARTICLES_PAGE = 'changeArticlesPage';
export const NOTIFICATION_MESSAGE = 'notificationMessage';
export const SET_NAVIGATION_CONFIGURATION = 'setNavigationConfiguration';

export interface IBlogRequestState {
  requestState: {
    loading: false,
    fetched: false,
    error: false,
    [key: string]: boolean,
  };
  message: string;
}

export interface IEditPost {
  id: number | null;
  title: string;
  body: string;
}

export interface IPosts {
  '@id': number;
  '@type': string;
  id: number;
  title: string;
  body: string;
}

export interface IBlogNavigation {
  start: number;
  lastPage: number;
  canJumpNextPage: boolean;
  canJumpLastPage: boolean;
  canJumpPrevPage: boolean;
  canJumpFirstPage: boolean;
}

export interface PostsState {
  posts: IPosts[];
  blogRequestState: IBlogRequestState;
  navigation: IBlogNavigation;
  notificationMessage: string;
  editPost: {
    content: IEditPost,
  };
}
