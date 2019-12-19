<template>
  <!-- 头部组件 -->
 <el-row class="layout-header" type="flex" justify="space-between">
<!-- 左侧 -->
<el-col  class="left" :span="8">
<!-- 左侧图标 -->
<i class="el-icon-s-unfold"></i>
<span class="title">突然发现我现在连十六个字都难说出口</span>
</el-col>
<!-- 右侧 -->
<el-col class="right" :span="4">
    <el-row type='flex' justify="end" align="middle">

       <img src="./111.jpg" alt="">
        <!-- 下拉菜单 -->
        <el-dropdown>
        <span>啦啦lala</span>
        <!-- 下拉菜单 具名插槽 -->
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </el-row>

        </el-col>
 </el-row>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.layout-header{
    height: 60px;
    .left{
        font-size:18px;
        .title{
            margin-left: 4px;
            color: #2c3e50;
            font-size: 16px;
        }
    }
    .right{
     img{
         width: 40px;
         height: 40px;
         border-radius: 50%;
         margin-right:5px
     }
    }
}
</style>
