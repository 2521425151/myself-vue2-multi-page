import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../../components/HelloWorldMobile.vue"
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/mobile2.html',
            component:HelloWorld
        },
        {
            path: '/index',
            beforeEnter() {
                window.location = "/"
            }
        },
        {
            path: '/mobile',
            beforeEnter() {
                window.location = "/mobile.html"
            }
        },
    ]
  })