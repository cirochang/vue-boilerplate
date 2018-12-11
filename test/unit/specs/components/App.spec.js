import Vuex from 'vuex';
import { shallow, createLocalVue } from 'vue-test-utils';
import App from '@/App.vue';
import Login from '@/components/Login.vue';
import router from '@/router';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  it('Show loggin page if is loggedIn', () => {
    const store = new Vuex.Store({
      getters: {
        isLoggedIn: () => false,
      },
      actions: {
        getCurrentUser() {},
      },
    });
    const wrapper = shallow(App, {
      store,
      localVue,
      router,
    });
    expect(wrapper.findAll('div').contains(Login)).to.equal(true);
  });

  it('Show system page if is NOT loggedIn', () => {
    const store = new Vuex.Store({
      getters: {
        isLoggedIn: () => true,
      },
      actions: {
        getCurrentUser() {},
      },
    });
    const wrapper = shallow(App, {
      store,
      localVue,
      router,
    });
    expect(wrapper.findAll('div').contains(Login)).to.equal(false);
  });
});
