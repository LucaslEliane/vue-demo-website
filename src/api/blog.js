/**
 * Project: vue-demo
 * Author: Lucas Twilight
 * Create Time: 2017-08-15 13:31
 * Description: 本人自己的博客内容的获取api，开发阶段使用rap来mock数据
 */

import 'whatwg-fetch';
import config from '../config';

const { requestURL, myUserID } = config;

export const getBlogList = function getBlogList(userID, start, count, cb, errCb) {
  if (!userID) {
    userID = myUserID;
  }
  window.fetch(`${requestURL}blogList?userid=${userID}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(response => response.json(),
    err => errCb(err),
  ).then(
    (response) => {
      if (response.data && response.data.length !== 0) {
        return cb(response.data);
      }
      return errCb('cannot fetch passageList from server');
    },
  );
};

export const getBlog = function getBlog(passageID, cb, errCb) {
  window.fetch(`${requestURL}passage?passageid=${passageID}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(response => response.json(),
    err => errCb(err),
  ).then(
    (response) => {
      window.console.log(response);
      if (response) {
        return cb(response);
      }
      return errCb('cannot fetch passage from server');
    },
  );
};
