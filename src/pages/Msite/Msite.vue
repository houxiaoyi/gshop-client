<template>
  <section class="msite">
    <!--首页头部-->
    <!--<header class="header">
      <span class="header_search">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_title">
        <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
      </span>
      <span class="header_login">
        <span class="header_login_text">登录|注册</span>
      </span>
    </header>-->
    <HeaderTop :title="address.name"> <!--在title前添加冒号，强制绑定-->
      <router-link class="header_search" slot="search" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="login" :to="userInfo._id?'/userinfo':'/login'">
        <span class="header_login_text" v-if="!userInfo._id"> <!--用户没登录显示-->
          登录|注册
        </span>
        <span class="header_login_text" v-else> <!--用户登录显示图片-->
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:;" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+category.image_url">
                <!--<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg">-->
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>

        <!--Add Pagination(分页器)-->
        <div class="swiper-pagination"></div>
      </div>
      <!--使用svg显示加载中提示界面-->
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>

    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
      <!--<div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/1.jpg" alt="">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <div class="delivery_style delivery_right">硅谷专送</div>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>￥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约￥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/2.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      4.1
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/3.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item off"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.2
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/4.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>-->
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
    data(){
      return{
        baseImageUrl:'https://fuss10.elemecdn.com',
      }
    },
    mounted() {
      this.$store.dispatch('getCategorys');
      this.$store.dispatch('getShops');

      //创建一个Swiper对象，来实现轮播(创建时间必须在数组数据显示之后，即computed中mapState之后)
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        //如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
    computed: {
      ...mapState(['address','categorys','userInfo']),//因为Profile已经引入userInfo，这里可以直接取

      /*
      根据categorys一维数组生成一个2维数组
      小数组中的元素个数最大是8
       */
      categorysArr(){
        const {categorys} = this;
        //准备空的2维数组
        const arr = [];
        //准备一个小数组(最大长度为8)
        let minArr = [];
        //遍历categorys
        categorys.forEach(c => {
          //如果当前小数组已经满了，创建一个新的
          if (minArr.length === 8) {
            minArr = [];
          }
          //如果minArr是空的，将小数组保存到大数组中
          if (minArr.length === 0) {
            arr.push(minArr);
          }
          //将当前分类保存到小数组中
          minArr.push(c);
        });

        return arr;
      }
    },

    watch: {
      categorys (value) { // categorys数组中有数据了, 在异步更新界面之前执行
        // 使用setTimeout可以实现效果, 但不是太好
        /*setTimeout(() => {
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }, 1000);*/

        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

        })

      }
    },

    //将组件映射成标签
    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  //首页
  .msite
    width 100% /*
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
        !*background-color red*!
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        width 50%
        !*background-color pink*!
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
        !*background-color blue*!
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        color #fff
        font-size 14px
        .header_login_text
          color #fff
*/

    .msite_nav
      //一像素下边框
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            /*justify-content: center;--富裕空间在主轴两边*/
            justify-content center
            /*align-items: flex-start;--富裕空间在侧轴正方向*/
            align-items flex-start
            /*控制容器为单行/列还是多行/列。控制侧轴的方向(如果组件width太小，会在y轴上排列)*/
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px #e4e4e4
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .iconfont
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

  /*.shop_container
    margin-bottom 50px
    .shop_list
      .shop_li
        bottom-border-1px(#e4e4e4)
        width 100%
        >a
          !*清除浮动，引用工具类mixins.styl*!
          clearFix()
          display block
          !*
            box-sizing：content-box | border-box  区别
              content-box：padding和border不被包含在定义的width和height之内
                          盒子的实际宽度=设置的width+padding+border
              border-box:padding和border被包含在定义的width和height之内
                          盒子的实际宽度=设置的width（padding和border不会影响实际宽度）
          *!
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
              !*
                font-weight 属性设置文本的粗细
                数字值 400 相当于 关键字 normal，700 等价于 bold
              *!
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
              .star
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
                !*transform-origin(X,Y):是变形原点,用来设置元素的运动的基点*!
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
                color #ccc*/
</style>
