import $cookie from '@/.internal/cookie';
import {
  userLogin,
  userLogout,
} from '../api/login';
import * as types from './mutation-types';

const actions = {
  login({ commit }, { userName, password }) {
    userLogin(
      userName,
      password,
      (data) => {
        commit(types.USER_LOGIN, data);
        $cookie.setCookie(
          'username',
          {
            value: data.userName,
            maxAge: 1000 * 60 * 60 * 24,
          },
        );
        $cookie.setCookie(
          'userid',
          {
            value: data.userID,
            maxAge: 1000 * 60 * 60 * 24,
          },
        );
      },
      err => commit(types.USER_LOGIN, err),
    );
  },
  fetchingLogin({ commit }) {
    commit(types.FETCHING_LOGIN);
  },
  logout({ commit }, userName) {
    userLogout(userName, () => {
      $cookie.clearCookie();
      commit(types.USER_LOGOUT);
    });
  },
};

export default actions;
