/*
入口JS
 */
import Vue from 'vue'
import App from './App'
import router from './router'//引入路由
import store from './store'

new Vue({
  el: '#app',
  /*components: { App },
  template: '<App/>'*/

  router, //使用上vue-router
  render: h => h(App),
  store //使用上vuex
});
/*
render:h=>h(App)是ES6中箭头函数写法，等价于render:function(h){return h(App)}
components: { App },template: '<App/>'配合使用与单独使用render:h=>h(App)会达到同样效果
 */
