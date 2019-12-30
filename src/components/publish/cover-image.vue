<template>
  <div class="cover-image">
      <!-- 根据封面的images长度 进行渲染 一个或三个不渲染 -->
      <div @click="openDialog(index)" v-for="(item,index) in list" :key="index" class="cover-item">
        <!-- <img src="../../assets/img/pic_bg.png" alt=""> -->
        <img :src="item ? item : defaultImg" alt="">
      </div>
      <!-- 生成的元素在body上，用visible控制显示隐藏 -->
     <el-dialog :visible="dialogVisible" @close="closeDialog">
       <!-- 选择素材组件 -->
       <select-image @selectOneImg="receiveImg"></select-image>
     </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'], // 接受属性
  data () {
    return {
      dialogVisible: false, // 关闭弹层
      defaultImg: require('../../assets/img/5.jpg'), // 将图片变成变量
      selectIndex: -1// 默认下表 -1
    }
  },
  methods: {
    // 接收方法
    receiveImg (img) {
      // props是只读的 不能修改
      // 接受数据之后 发现 list为props数据 想要修改 再次传递
      this.$emit('clickOneImg', img, this.selectIndex)// 再次触发一个自定义事件
      this.closeDialog()
    },
    // 打开
    openDialog (index) {
      this.selectIndex = index // 记住点击的下标
      this.dialogVisible = true// 打开弹层
    },
    // 关闭
    closeDialog () {
      this.dialogVisible = false// 关闭弹层
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
