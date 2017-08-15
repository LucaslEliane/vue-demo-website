/**
 * Project: vue-demo
 * Author: Lucas Twilight
 * Create Time: 2017-08-15 20:21
 * Description: the detailed information for a passage.
 */
import * as types from '../mutation-types';
import { getBlog } from '../../api/blog';

const states = {
  authorID: null,
  passageID: null,
  passageTitle: null,
  category: null,
  passageContent: null,
  isFetchingPassage: false,
  fetchPassageError: null,
};

const getters = {
  getPassage: function getPassage(state) {
    return {
      authorID: state.authorID,
      passageID: state.passageID,
      passageTitle: state.passageTitle,
      category: state.category,
      passageContent: state.passageContent,
    };
  },
  isFetchingPassage: state => state.isFetchingPassage,
  fetchPassageError: state => state.fetchPassageError,
};

const actions = {
  fetchPassage({ commit }, passageID) {
    commit(types.FETCHING_PASSAGE);
    getBlog(
      passageID,
      passage => commit(types.FETCH_PASSAGE, passage),
      err => commit(types.FETCH_PASSAGE_ERROR, err),
    );
  },
};

const mutations = {
  [types.FETCHING_PASSAGE](state) {
    state.isFetchingPassage = true;
  },
  [types.FETCH_PASSAGE](state, passage) {
    const keys = Object.keys(passage);
    keys.forEach((key) => {
      state[key] = passage[key];
    });
    state.isFetchingPassage = false;
  },
  [types.FETCH_PASSAGE_ERROR](state, err) {
    state.isFetchingPassage = false;
    state.fetchPassageError = err;
  },
};

export default {
  state: states,
  getters,
  actions,
  mutations,
};
