<template>
  <!--公共头部-->
  <header class="header">
    <slot name="search"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="login"></slot>
  </header>
</template>

<script>
  export default {
    props:{
      title:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 45px
    background-color #02a774
    position fixed
    left 0
    top 0
    z-index 100
    .header_search
      width 10%
      height 50%
      /*background-color red*/
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      width 50%
      /*background-color pink*/
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      /*background-color blue*/
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      color #fff
      font-size 14px
      .header_login_text
        color #fff

</style>
