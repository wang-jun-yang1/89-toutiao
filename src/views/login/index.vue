<template>
  <div class="login">
    <!-- 放置一个卡片组件 -->
   <el-card class="login-card">
    <div class="title">
       <img src="../../assets/img/logo_index.png" alt="">
    </div>
    <!-- 登录表单  表单容器 el-form 需要绑定model属性 rules属性绑定验证规则对象-->
    <el-form ref="myForm" style="margin-top:30px" :model="loginForm"  :rules="loginRules">
      <!-- 表单域 el-form-item  一行  el-form-item prop要校验的字段名-->
      <el-form-item prop="mobile">
        <!-- 放置具体组件 -->
        <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:70%"></el-input>
        <el-button plain style="float:right">发送验证码</el-button>
      </el-form-item>
      <el-form-item prop="check">
        <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
       <el-form-item>
         <!-- 注册一个点击事件 -->
         <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
       </el-form-item>

    </el-form>
   </el-card>

  </div>
</template>

<script>
export default {
// 第一步在data中定义表单数据对象
  data () {
    return {
    //  定义一个表单数据对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false// 是否勾选
      },
      loginRules: {
        // 验证规则 验证登录表单的 key（字段名）：value（数组）
        // required:true 必填
        mobile: [{ required: true, message: '请输入你的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }
        ],
        code: [{ required: true, message: '请输入你的验证码' },
          { pattern: /^\d{6}$/, message: '验证码不正确' }],
        check: [{
          validator: function (rule, value, callback) {
          //  rule当前的规则，没神魔用
          // value指的就是我们要校验的字段的值
            if (value) {
              //  认为校验通过  放过去
              callback()// 直接执行callback 认为通过
            } else {
              // 认为校验通过  要提示信息
              callback(new Error('你必须选择'))
            }
          }
        }]
      }
    }
  },
  methods: {
    // 提交我的登录表单
    submitLogin () {
      // el-form实例
      this.$refs.myForm.validate((isok) => {
        if (isok) {
          // 认为前端校验格式正确
          // 地址参数 查询参数 params 对象
          // body参数 data对象
          this.$axios({
            url: '/authorizations', // 请求地址
            method: 'post',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.token)// 前端缓存令牌
            // 成功之后才会进入到then
            this.$router.push('/home')// 跳转到主页
          })
          // .catch(() => {
          //   this.$message({
          //     message: '手机号或验证码错误',
          //     type: 'warning'
          //   })
          // })
        }
      })
    }
  }
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
