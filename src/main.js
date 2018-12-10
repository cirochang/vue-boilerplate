import Vue from 'vue';

//CSS imports
import '@/assets/css/main.css';

import router from '@/router';
import store from '@/store';

import App from '@/App.vue';

// Instantiate application to the DOM
const app = new Vue({
    router,
    el: '#app',
    store,
    render: h => h(App)
});
