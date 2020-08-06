import Routes from 'src/constants/api/routes';
import axios from 'axios';
import userToken from 'src/services/api/auth';

export const getPosts = async (page: number): Promise<any> => {
  /** ************ Request configuration ************ */
  const reqUrl = `${Routes.posts.url}?page=${page || 1}`;

  const reqSettings = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: userToken,
    },
  };

  return axios.get(reqUrl, reqSettings).catch((e) => { throw e; });
};

export default getPosts;
