import Routes from 'src/constants/api/routes';
import axios from 'axios';
import userToken from 'src/services/api/auth';

export const getPosts = async (page: number): Promise<any> => {
  /** ************ Request configuration ************ */
  const reqUrl = `${Routes.posts.url}?page=${page || 1}`;

  const reqSettings = {
    headers: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/ld+json',
      Authorization: userToken,
    },
  };

  return axios.get(reqUrl, reqSettings).catch((e) => { throw e; });
};

export const deletePostReq = async (articleId: number): Promise<any> => {
  /** ************ Request configuration ************ */
  const reqUrl = `${Routes.posts.url}/${articleId}`;

  const reqSettings = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: userToken,
    },
  };

  return axios.delete(reqUrl, reqSettings).catch((e) => { throw e; });
};

export default getPosts;
