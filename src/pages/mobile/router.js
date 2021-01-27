import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../../components/HelloWorldMobile.vue"
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/mobile.html',
            component:HelloWorld
        },
        {
            path: '/index',
            beforeEnter() {
                window.location = "/"
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