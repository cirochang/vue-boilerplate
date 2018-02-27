import Vue from 'vue';
import Notifications from 'vue-notification';

//CSS imports
import '@/assets/css/main.css';

import router from '@/router';
import store from '@/store';

import App from '@/App.vue';

Vue.use(Notifications);

// Instantiate application to the DOM
const app = new Vue({
    router,
    el: '#app',
    store,
    render: h => h(App)
});
