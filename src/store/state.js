import $cookie from '@/.internal/cookie';

const userName = $cookie.getCookie('username');
const userID = $cookie.getCookie('userid');

const states = {
  userID,
  userName,
  fetchingLogin: false,
  loginErrorMsg: '',
  isLogin: !!userName && !!userID,
};

export default states;
