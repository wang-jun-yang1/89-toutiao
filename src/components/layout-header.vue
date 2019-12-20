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

       <img :src="!userInfo.photo ? userInfo.photo : defaultImg" alt="">
        <!-- 下拉菜单 -->
        <el-dropdown @command="handle">
        <span>{{userInfo.name}}</span>
        <!-- 下拉菜单 具名插槽 -->
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </el-row>

        </el-col>
 </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 用户信息
      defaultImg: require('.././assets/img/ktm.jpg')
    }
  },
  created () {
    let token = window.localStorage.getItem('user-token')// 获取令牌
    // 查询数据
    this.$axios({
      url: '/user/profile',
      // headers参数
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data
    })
  },
  methods: {
    // 区分点击的菜单项
    handle (command) {
      if (command === 'exit') {
        window.localStorage.removeItem('user-token')// 删除令牌
        this.$router.push('/login')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/wang-jun-yang1/git-back-stage-management'
      }
    }
  }
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
