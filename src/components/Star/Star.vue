<template>
  <!--<div class="star star-24">-->
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc,index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
  //类的常量
  const CLASS_ON = 'on';
  const CLASS_HALF = 'half';
  const CLASS_OFF = 'off';

  export default {
    //设计props
    props:{
      score:Number,//分数
      size:Number//星星大小
    },
    computed:{
      /*
      算法：
      3.4: 3 + 0 + 2（3个全星，0个半星，2个灰星）
      3.5: 3 + 1 + 1（3个全星，1个半星，1个灰星）>=0.5的是半星
       */
      starClasses(){
        const {score} = this;
        const scs = [];//scoreClasses  ['on','half','off']
        const scoreInteger = Math.floor(score);//地板 3.2或3.6==>3
        //向scs中添加 n个'on'
        for (let i = 0; i < scoreInteger; i++) {
          scs.push(CLASS_ON);
        }
        //向scs中添加 0/1个'half'
        /*
          小数的加减不是很精确，如果是0.5也可能是0.499，所以:
          score - scoreInteger >= 0.5 改为：score*10 - scoreInteger*10 >= 5
          即：两边同乘10
        */
        // if (score - scoreInteger > 0.5) {
        if (score*10 - scoreInteger*10 >= 5) {
          scs.push(CLASS_HALF);
        }
        //向scs中添加 n个'off'
        while (scs.length < 5) {////这里必须使用while，使用if若是1.6星评价，后边灰色星星不显示
          scs.push(CLASS_OFF);
        }
        return scs;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
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
        /*
          background-size 40px 20px:指定背景图片的尺寸
            宽度40px，高度20px
         */
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        /*
          background-size 40px 20px:指定背景图片的尺寸
            宽度40px，高度20px
         */
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        /*
          background-size 40px 20px:指定背景图片的尺寸
            宽度40px，高度20px
         */
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')

</style>
