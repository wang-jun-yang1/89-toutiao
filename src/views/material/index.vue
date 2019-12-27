<template>
<!-- 基本页面结构 -->
  <el-card v-loading="loading">
      <bread-crumb slot="header">
      <template slot="title">素材管理</template>
      </bread-crumb>
      <el-row type="flex" justify="end">
        <el-upload :http-request="uploadImg" :show-file-list="false">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-row>
      <!-- 素材 -->
      <el-tabs  v-model="activeName" @tab-click="changeTab">
          <el-tab-pane label="全部素材" name="all">
              <!-- 全部素材内容 -->
              <div class="img-list">
                  <el-card class="img-card" v-for="item in list" :key='item.id'>
                      <img :src="item.url" alt="">
                    <el-row class="operate" type="flex" justify="space-around">
                      <!-- v-bind:style 根据收藏状态显示图标颜色-->
                        <i @click="collectOrCancel(item)" :style="{color:item.is_collected ? 'red' : ''}" class="el-icon-star-on"></i>
                        <i @click="delMaterial(item.id)" class="el-icon-delete-solid"></i>
                    </el-row>
                  </el-card>
              </div>
              <el-row type="flex" justify="center" style="height:80px" align="middle">
                <el-pagination
                background
                layout="prev,pager,next"
                :total="page.total"
                :current-page="page.currentPage"
                :page-size="page.pageSize"
                @current-change="changePage"
                ></el-pagination>
              </el-row>
          </el-tab-pane>
          <el-tab-pane label="收藏素材" name="collect">
              <!-- 收藏素材内容 -->
              <div class="img-list">
                  <el-card class="img-card" v-for="item in list" :key='item.id'>
                      <img :src="item.url" alt="">
                  </el-card>
              </div>
                      <el-row type="flex" justify="center" style="height:80px" align="middle">
                <el-pagination
                background
                layout="prev,pager,next"
                :total="page.total"
                :current-page="page.currentPage"
                :page-size="page.pageSize"
                @current-change="changePage"
                ></el-pagination>
              </el-row>
          </el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      activeName: 'all', // 默认选中全部
      list: [], // 接受全部数据
      page: {
        currentPage: 1, // 当前页码
        pageSize: 12, // 每页多少条
        total: 0// 总条数
      }
    }
  },
  methods: {
    // 删除
    delMaterial (id) {
      this.$confirm('确定要删除？').then(() => {
      // 只有点击了确定才会执行
      // 调用删除接口
        this.$axios({
          url: `/user/images/${id}`,
          method: 'delete'
        }).then(() => {
          // 重新拉取
          this.getAllMaterial()// 重新加载
        })
      })
    },
    // 收藏或者取消收藏
    collectOrCancel (row) {
      // 调用 收藏或者取消接口
      this.$axios({
        url: `/user/images/${row.id}`,
        method: 'put',
        data: {
          collect: !row.is_collected // 状态取反 收藏-取消 取消-收藏
        }
      }).then(() => {
        // 成功进入到then
        this.getAllMaterial()// 重新加载
      })
    },
    // 上传图片
    uploadImg (params) {
      this.loading = true // 打开进度条
      let form = new FormData()
      form.append('image', params.file)// 添加文件到fordata
      this.$axios({
        method: 'post',
        url: '/user/images',
        data: form // formdata数据
      }).then(result => {
        this.loading = false // 关闭进度条
        // 说明已经上传成功了一张图片
        this.getAllMaterial()
      })
    },
    // 切换分页
    changePage (newPage) {
      this.page.currentPage = newPage // 得到最新页码
      this.getAllMaterial()
    },
    // 切换tab事件
    changeTab () {
      this.page.currentPage = 1 // 应该把当前页码回到第一页 如果不重置第一页 就会直接去找不到对应页码
      this.getAllMaterial()// 获取所有素材
    },
    getAllMaterial () {
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count // 获取总条数
      })
    }

  },
  created () {
    this.getAllMaterial()// 第一次进入activeName 为all 实际上是查的全部的数据
  }
}
</script>

<style lang='less' scoped>
.img-list{
    display: flex;
    flex-wrap: wrap;
    .img-card{
        width: 160px;
        height:200px;
        margin: 20px 20px;
        position: relative;
        img{

            width: 100%;
            height: 100%;
        }
        .operate{
          margin:0px;
          width: 100%;
          font-size: 20px;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #f4f5f6;
          height: 30px;
         i{
           cursor: pointer;
         }
        }
    }
}
</style>
