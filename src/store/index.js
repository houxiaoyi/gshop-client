/*
vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({//顺序固定（state，mutations，actions，getters）
  state,
  mutations,
  actions,
  getters
})
