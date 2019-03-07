/*
直接更新state的多个方法的对象
 */
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER_INFO} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){//action与mutation交互时，传的是“包含数据的对象”，如:{address}
    state.address = address;
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops;
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo;
  }

}
