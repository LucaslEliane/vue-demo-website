/**
 * Project: vue-demo
 * Author: Lucas Twilight
 * Create Time: 2017-08-15 13:33
 * Description: Description: 本人自己的博客内容的vuex模块
 */
import config from '@/config';
import { getBlogList } from '@/api/blog';
import * as types from '../mutation-types';

const { listCount } = config;

const initalState = {
  passageList: [],
  currentShowPassageListStart: 0,
  currentShowPassageListCount: listCount,
  fetchingPassageList: false,
  fetchingPassageListStatus: 'success',
  fetchPassageListError: null,
};

const states = {
  passageList: [],
  currentShowPassageListStart: 0,
  currentShowPassageListCount: listCount,
  fetchingPassageList: false,
  fetchingPassageListStatus: 'success',
  fetchPassageListError: null,
};

const getters = {
  isFetchingPassageList: state => state.fetchingPassageList,
  isFetchingPassageListOK: state => state.fetchingPassageListStatus === 'success',
  currentShowPassageListCount: state => state.currentShowPassageListCount,
  currentShowPassageListStart: state => state.currentShowPassageListStart,
  passageList: state => state.passageList,
};

const actions = {
  fetchPassageList({ commit, state }, userID, start, count) {
    commit(types.FETCHING_PASSAGELIST);
    getBlogList(
      userID,
      start,
      count,
      passageList => commit(types.FETCH_PASSAGELIST, passageList),
      err => commit(types.FETCH_PASSAGELIST_ERROR, err),
    );
  },
  clearPassageList({ commit }) {
    commit(types.CLEAR_PASSAGELIST);
  },
};

const mutations = {
  [types.FETCHING_PASSAGELIST](state) {
    state.fetchingPassageList = true;
  },
  [types.FETCH_PASSAGELIST](state, passageList) {
    state.passageList = state.passageList.concat(passageList);
    state.fetchingPassageList = false;
    state.fetchingPassageListStatus = 'success';
    state.currentShowPassageListStart += state.currentShowPassageListCount;
  },
  [types.FETCH_PASSAGELIST_ERROR](state, err) {
    state.fetchingPassageList = false;
    state.fetchingPassageListStatus = 'error';
    state.fetchPassageListError = err;
  },
  [types.CLEAR_PASSAGELIST](state) {
    const keys = Object.keys(state);
    keys.forEach((key) => {
      state[key] = initalState[key];
    });
  },
};

export default {
  state: states,
  getters,
  actions,
  mutations,
};
