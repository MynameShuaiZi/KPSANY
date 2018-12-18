import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routers = [
  /**首页*/
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['../components/HelloWorld'], resolve)
  },
  /**待办~已办~通告*/
];

const vueRouter = new Router({
    mode: 'hash',
    // mode: 'history',
    routes: routers
  }
);

vueRouter.beforeEach((to, from, next) => {
  next()
});

export default vueRouter
