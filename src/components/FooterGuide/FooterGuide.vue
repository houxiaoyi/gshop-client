<template>
  <div>
    <!--
      这里的footer标签也可换成div标签
      a标签也可换成span标签
      i标签制作小图标：(class="iconfont icon-waimai")class属性中iconfont和icon-waimai必须同时写，否则图标不显示
    -->
    <footer class="footer_guide">
      <a href="javascript:;" class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </a>
      <a class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
      </a>
    </footer>
  </div>
</template>

<script>
  export default {
    methods:{
      goTo(path){
        //$router:控制路由进行跳转
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  //footer
  .footer_guide
    //一像素上边框(引用的工具类mixins.styl中的)
    top-border-1px(#e4e4e4)
    //position为fixed,left、right、bottom为0：把footer固定到底部
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    //底部导航背景颜色
    background-color #fff
    //底部导航宽、高
    width 100%
    height 50px
    //display：flex 将对象作为弹性伸缩盒显示
    // flex是flex box的缩写，中文“弹性盒子”，用来为盒装模型提供最大的灵活性。任何一个容器都可以指定为flex布局
    display flex
    .guide_item
      /*使用flex布局将footer平均分成4份*/
      display flex
      flex 1
      /*居中*/
      text-align center
      /*flex-direction：控制主轴和侧轴分别是哪一根
      (图标、字体 上下显示)*/
      flex-direction column
      align-items center
      margin 5px
      /*图标、字体 颜色*/
      color #999999
      /*父级引用：使用字符 & 指向父选择器*/
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
