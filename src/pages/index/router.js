import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../../components/HelloWorld.vue"
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            component:HelloWorld
        },
        {
            path: '/mobile',
            beforeEnter() {
                window.location = "/mobile.html"
            }
        },
        {
            path: '/mobile2',
            beforeEnter() {
                window.location = "/mobile2.html"
            }
        },

    ]
  })