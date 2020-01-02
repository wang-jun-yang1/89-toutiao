<template>
  <el-card>
     <bread-crumb slot="header">
     <template slot="title">
        账户信息
     </template>
     </bread-crumb>
     <el-upload class="head-upload" action="" :show-file-list="false">
         <img src="../../assets/img/3.jpg" alt="">
         </el-upload>
      <el-form style="margin-left:100px" label-width="100px">
             <el-form-item label="用户名" style="width:40%">
                 <el-input></el-input>
             </el-form-item>
             <el-form-item label="简介" style="width:40%">
                  <el-input></el-input>
             </el-form-item>
             <el-form-item label="邮箱" style="width:40%">
                  <el-input></el-input>
             </el-form-item>
             <el-form-item label="手机号" style="width:40%">
                  <el-input></el-input>
             </el-form-item>
             <el-form-item >
                  <el-button type="primary">保存信息</el-button>
             </el-form-item>
         </el-form>

  </el-card>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.head-upload{
    position: absolute;
     right:150px;
    img{
        width:150px;
        height:150px;
        border-radius: 50%;
    }
}

</style>
