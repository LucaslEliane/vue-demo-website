import * as types from './mutation-types';

const mutations = {
  [types.USER_LOGIN](state, userInfo) {
    if (userInfo.userID && userInfo.userName) {
      state.userID = userInfo.userID;
      state.userName = userInfo.userName;
      state.loginErrorMsg = '';
      state.isLogin = true;
    } else {
      state.loginErrorMsg = userInfo.errMsg;
    }
    state.fetchingLogin = false;
  },
  [types.FETCHING_LOGIN](state) {
    state.fetchingLogin = true;
  },
  [types.USER_LOGOUT](state) {
    state.isLogin = false;
    state.userID = null;
    state.userName = null;
  },
};

export default mutations;
