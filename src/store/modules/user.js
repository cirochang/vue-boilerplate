import api from '@/gateways/foo-api';
import Cookies from 'js-cookie';

// initial state
const state = {
  currentUser: null,
  // Just for now
  // isLoggedIn: !!Cookies.get('token'),
  isLoggedIn: true,
};

// getters
const getters = {
  currentUser: state => state.currentUser,
  isLoggedIn: state => state.isLoggedIn,
};

// actions
const actions = {
  async getCurrentUser ({ commit }) {
    const { data } = await api.getCurrentUser();
    commit('SET_CURRENT_USER', data.user);
  },
  async login({ commit }, credentials) {
    const { data } = await api.login(credentials);
    commit('LOGIN_SUCCESS', data.token);
  },
  logout({ commit }) {
    commit('LOGOUT');
  },
};

// mutations
const mutations = {
  LOGIN_SUCCESS (state, token) {
    Cookies.set('token', token, { expires: 1});
    state.isLoggedIn = true;
  },
  LOGOUT (state) {
    Cookies.remove('token');
    state.currentUser = null;
    state.isLoggedIn = false;
  },
  SET_CURRENT_USER (state, user) {
    state.currentUser = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};