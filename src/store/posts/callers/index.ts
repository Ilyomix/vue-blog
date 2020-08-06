import Routes from 'src/constants/api/routes';
import axios from 'axios';

export const getPosts = async (page: number): Promise<any> => {
  const token = `Bearer ${localStorage.getItem('user-token')}`;
  const reqUrl = `${Routes.posts.url}?page=${page || 1}`;

  const reqSettings = {
    headers: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/ld+json',
      Authorization: token,
    },
  };

  return axios.get(reqUrl, reqSettings).catch((e) => { throw e; });
};

export const deletePostReq = async (articleId: number): Promise<any> => {
  const token = `Bearer ${localStorage.getItem('user-token')}`;
  const reqUrl = `${Routes.posts.url}/${articleId}`;

  const reqSettings = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  return axios.delete(reqUrl, reqSettings).catch((e) => { throw e; });
};

export const updatePostReq = async (
  content: {
    title: string,
    content: string,
  },
): Promise<any> => {
  const token = `Bearer ${localStorage.getItem('user-token')}`;
  const reqUrl = `${Routes.posts.url}`;

  const reqSettings = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  const body = { 
    title: content.title,
    body: content.content,
   };

  return axios.post(reqUrl, body, reqSettings).catch((e) => { throw e; });
};

export default getPosts;
