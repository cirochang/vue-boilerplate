import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// Modules
import user from './modules/user';

Vue.use(Vuex);

const isDebug = process.env.NODE_ENV === 'dev';

export default new Vuex.Store({
  modules: {
    user,
  },
  strict: isDebug,
  plugins: isDebug ? [createLogger()] : [],
});
