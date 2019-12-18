<template>
  <div class="login">
    <!-- 放置一个卡片组件 -->
   <el-card class="login-card">
    <div class="title">
       <img src="../../assets/img/logo_index.png" alt="">
    </div>
    <!-- 登录表单  表单容器 -->
    <el-form style="margin-top:30px">
      <!-- 表单域 el-form-item  一行 -->
      <el-form-item>
        <!-- 放置具体组件 -->
        <el-input placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入验证码" style="width:70%"></el-input>
        <el-button plain style="float:right">发送验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
       <el-form-item>
         <el-button type="primary" style="width:100%">登录</el-button>
       </el-form-item>

    </el-form>
   </el-card>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// scoped只会对当前组件样式产生作用，原理：是为当前标签生成data-v随机数
.login{
  background-image: url("../../assets/img/login_bg.jpg");
  background-size:cover;//自适应背景照片
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card{
    width: 450px;
    height: 350px;
    .title{
      text-align: center;
      img{
        height: 40px;
      }
    }
  }
}
</style>
