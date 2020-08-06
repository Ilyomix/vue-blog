import Routes from 'src/constants/api/routes';

export const loginApiCaller = (credentials: {[key: string]: string}): Promise<Response> => {
  /************** Request configuration *************/
  const reqUrl = Routes.login.url;

  const body = {
    ...credentials,
  };

  const reqSettings = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(reqUrl, reqSettings).catch(e => { throw e; });
};

export default loginApiCaller;
