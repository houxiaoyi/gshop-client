<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {reqFoodTypes} from './api'

export default {
 /* async mounted(){
    const result = await reqFoodTypes();
    console.log(result);
  },*/
  mounted(){
    /*//异步获取address
    this.$store.dispatch('getAddress');*/
    //本句可用映射函数mapActions代替（methods方法），下边使用this.getAddress()即可
    this.getAddress();
    this.getUserInfo();
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    /*background #f5f5f5*/
    background #fff
</style>
