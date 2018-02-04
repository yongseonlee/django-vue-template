import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: HelloWorld, name: 'HelloWorld' },
  ],
  hashbang: false,
  mode: 'history',
  linkActiveClass: 'active',
})
