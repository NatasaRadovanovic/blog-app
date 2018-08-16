import Vue from 'vue'
import Router from 'vue-router';

import AppPosts from './containers/AppPosts.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'posts',  name:'home'},
        {path: '/posts', component: AppPosts, name: 'posts'},
      ]
})
