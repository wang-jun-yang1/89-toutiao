<template>
  <div class="cover-image">
      <!-- 根据封面的images长度 进行渲染 一个或三个不渲染 -->
      <div v-for="(item,index) in list" :key="index" class="cover-item">
        <!-- <img src="../../assets/img/pic_bg.png" alt=""> -->
        <img :src="item ? item : defaultImg" alt="">
      </div>

  </div>
</template>

<script>
export default {
  props: ['list'], // 接受属性
  data () {
    return {
      defaultImg: require('../../assets/img/5.jpg')// 将图片变成变量
    }
  }
}
</script>

<style lang="less" scoped>
.cover-image{
  display: flex;
  margin: 20px 0px;
  margin-left: 100px;
  .cover-item{
    border: 1px solid #ccc;
    width: 200px;
    height:200px;
    img{
      height:100%;
    }
  }
}
</style>
