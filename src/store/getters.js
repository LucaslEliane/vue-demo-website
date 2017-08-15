const getters = {
  userInfo: function userInfo(state) {
    return {
      userID: state.userID,
      userName: state.userName,
    };
  },
  isLogin: function isLogin(state) {
    return state.isLogin;
  },
  loginErrorMsg: function loginErrorMsg(state) {
    return state.loginErrorMsg.length === 0
      ? 'placeholder'
      : state.loginErrorMsg;
  },
};

export default getters;
