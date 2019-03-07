<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
      <li class="shop_li border-1px" v-for="(shop,index) in shops" :key="index">
        <a>
          <div class="shop_left">
            <img class="shop_img" :src="baseImageUrl+shop.image_path">
            <!--<img src="http://cangdu.org:8001/img/16018a5c08533.jpeg" class="shop_img">-->
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{shop.name}}</h4>
              <ul class="shop_detail_ul">
                <li class="supports" v-for="(support,index) in shop.supports" :key="index">
                  {{support.icon_name}}
                </li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <!--<div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>-->
                <Star :score="shop.rating" :size="24"/>
                <div class="rating_section">
                  {{shop.rating}}
                </div>
                <div class="order_section">
                  月售{{shop.recent_order_num}}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <div class="delivery_style delivery_right">{{shop.delivery_mode.text}}</div>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>￥{{shop.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约￥{{shop.float_delivery_fee}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
    <!--使用svg显示加载中提示界面-->
    <ul v-else>
      <li v-for="item in 6"> <!--6表示循环6个-->
        <img src="./images/shop_back.svg" alt="back">
      </li>
    </ul>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import Star from '../Star/Star'
  export default {
    data(){
      return{
        baseImageUrl:'http://cangdu.org:8001',
      }
    },
    computed:{
      ...mapState(['shops'])
    },
    components:{//映射组件
      Star,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop_container
    margin-bottom 50px
    .shop_list
      .shop_li
        bottom-border-1px(#e4e4e4)
        width 100%
        >a
          /*清除浮动，引用工具类mixins.styl*/
          clearFix()
          display block
          /*
            box-sizing：content-box | border-box  区别
              content-box：padding和border不被包含在定义的width和height之内
                          盒子的实际宽度=设置的width+padding+border
              border-box:padding和border被包含在定义的width和height之内
                          盒子的实际宽度=设置的width（padding和border不会影响实际宽度）
          */
          box-sizing border-box
          width 100%
          padding 15px 8px
        .shop_left
          float left
          box-sizing border-box
          width 23%
          height 75px
          padding-right 10px
          .shop_img
            width 100%
            height 100%
        .shop_right
          float right
          width 77%
          .shop_detail_header
            clearFix()
            width 100%
            .shop_title
              float left
              width 200px
              color #333
              font-size 16px
              line-height 16px
              /*
                font-weight 属性设置文本的粗细
                数字值 400 相当于 关键字 normal，700 等价于 bold
              */
              font-weight 700
              &::before
                content '品牌'
                font-size 11px
                line-height 11px
                color #333
                background-color #ffd930
                padding 2px 2px
                border-radius 2px
                margin-right 5px
            .shop_detail_ul
              float right
              margin-top 3px
              .supports
                float left
                font-size 10px
                line-height 10px
                color #999
                border 1px solid #f1f1f1
                padding 0 2px
          .shop_rating_order
            clearFix()
            width 100%
            margin 18px 0 8px 0
            .shop_rating_order_left
              float left
              color #ff9a0d
              /*.star
                float left
                font-size 0
                .star-item
                  display inline-block
                  background-repeat no-repeat
                &.star-48
                  .star-item
                    width 20px
                    height 20px
                    margin-right 22px
                    !*
                      background-size 40px 20px:指定背景图片的尺寸
                        宽度40px，高度20px
                     *!
                    background-size 20px 20px
                    &:last-child
                      margin-right 0
                    &.on
                      bg-image('./images/stars/star48_on')
                    &.half
                      bg-image('./images/stars/star48_half')
                    &.off
                      bg-image('./images/stars/star48_off')
                &.star-36
                  .star-item
                    width 15px
                    height 15px
                    margin-right 6px
                    !*
                      background-size 40px 20px:指定背景图片的尺寸
                        宽度40px，高度20px
                     *!
                    background-size 15px 15px
                    &:last-child
                      margin-right 0
                    &.on
                      bg-image('./images/stars/star36_on')
                    &.half
                      bg-image('./images/stars/star36_half')
                    &.off
                      bg-image('./images/stars/star36_off')
                &.star-24
                  .star-item
                    width 10px
                    height 10px
                    margin-right 3px
                    !*
                      background-size 40px 20px:指定背景图片的尺寸
                        宽度40px，高度20px
                     *!
                    background-size 10px 10px
                    &:last-child
                      margin-right 0
                    &.on
                      bg-image('./images/stars/star24_on')
                    &.half
                      bg-image('./images/stars/star24_half')
                    &.off
                      bg-image('./images/stars/star24_off')
*/
              .rating_section
                float left
                font-size 10px
                color #ff6000
                margin-left 4px
              .order_section
                float left
                font-size 5px
                color #666
                margin-left 5px
                transform scale(.8)
            .shop_rating_order_right
              float right
              font-size 0
              .delivery_style
                font-size 12px
                /*transform-origin(X,Y):是变形原点,用来设置元素的运动的基点*/
                transform-origin 35px 0
                transform scale(.7)
                display inline-block
                padding 1px
                border-radius 2px
              .delivery_left
                margin-right -10px
                background-color #02a774
                border 1px solid #02a774
                color #fff
              .delivery_right
                color #02a774
                border 1px solid #02a774

          .shop_distance
            clearFix()
            width 100%
            font-size 12px
            .shop_delivery_msg
              float left
              transform scale(.9)
              transform-origin 0
              color #666
              .segmentation
                color #ccc
</style>
