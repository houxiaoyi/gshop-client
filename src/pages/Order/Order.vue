<template>
  <section class="order">
    <!--<header class="header">
      <a href="javascript:;" class="header_title">
        <span class="header_title_text">订单列表</span>
      </a>
    </header>-->
    <HeaderTop title="订单列表">
    </HeaderTop>
    <section class="order_no_login">
      <img src="./order/person.png" alt="">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

  export default {
    //将标签映射成组件
    components:{
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .order
    width 100%
    .header
      background-color #02a774
      position fixed
      left 0
      top 0
      z-index 100
      width 100%
      height 45px
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        font-size 22px
        text-align center
        color #fff
    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        color #6a6a6a
        font-size 17px
      >button
        display inline-block
        border 4px solid #02a774
        background #02a774
        border-radius 5px
        color #fff
        padding 10px 20px
        font-size 14px
        outline none
</style>
