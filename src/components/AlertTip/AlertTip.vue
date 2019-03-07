<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confirm" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
  export default {
    props:{
      alertText:String
    },
    methods:{
      closeTip(){
        //分发自定义事件(事件名：closeTip)
        this.$emit('closeTip');
        /*
        vm.$emit(event,arg) //触发当前实例上的事件
        1.父组件可以使用 props 把数据传给子组件
        2.子组件可以使用 $emit 触发父组件的自定义事件
         */
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  @keyframes tipMove
    0%
      transform:scale(1)
    35%
      transform:scale(.8)
    70%
      transform:scale(1.1)
    100%
      transform:scale(1)

  .alert_container
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 200
    background rgba(0,0,0,.5) //黑色*0.5
    .tip_text_container
      position absolute
      top 50%
      left 50%
      margin-top -90px
      margin-left -110px
      width 60%
      animation tipMove .4s
      background-color rgba(255,255,255,1)
      border 1px
      padding-top 20px
      border-radius 5px
      display flex //弹性布局
      justify-content center //定义了项目在主轴上的对齐方式
      flex-direction column //决定主轴的方向(即项目的排列方向)
      align-items center //定义项目在交叉轴上如何对齐
      .tip_icon
        width 55px
        height 55px
        border 2px solid #f8cb86
        border-radius 50%
        font-size 20px
        display flex//弹性布局
        justify-content center//定义了项目在主轴上的对齐方式
        flex-direction column//决定主轴的方向(即项目的排列方向)
        align-items center//定义项目在交叉轴上如何对齐
        &>span:nth-child(1)
          width 2px
          height 30px
          background-color #f8cb86
        &>span:nth-child(2)
          width 2px
          height 2px
          background-color #f8cb86
          border 1px
          border-radius 50%
          margin-top 2px
      .tip_text
        font-size 14px
        margin-top 10px
        color #333
        line-height 20px
        padding 0 5px
        text-align center
      .confirm
        font-size 18px
        font-weight bold
        background-color #4cd964
        color #fff
        margin-top 10px
        width 100%
        text-align center
        line-height 35px
        border-bottom-left-radius 5%
        border-bottom-right-radius 5%
</style>
