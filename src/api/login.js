import 'whatwg-fetch';
import config from '../config';

const { requestURL } = config;

export const userLogin = function userLogin(userName, password, cb, errCb) {
  window.fetch(`${requestURL}login/commonLogin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName,
      password,
    }),
  }).then(response => response.json(),
    err => errCb(err),
  ).then(response => cb(response));
};

export const userLogout = function userLogout(username, cb) {
  cb();
};
